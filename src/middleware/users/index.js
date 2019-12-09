import { getUsersInit, getUsersSuccess, getUsersFailed } from '../../core/users/actions'

export function getUsers() {
    return function (dispatch, getState) {
      dispatch(getUsersInit())
      console.log(getState());
      const token = getState().token;
      fetch("http://localhost:3000/users", {
        method: "GET",
        headers: { authorization : token},
      }).then((response) => {
        response.json().then(response => {
          if (response.success) {
            dispatch(getUsersSuccess(response.data));
          } else {
            dispatch(getUsersFailed(response));
          }
        })
      }).catch((error) => dispatch(getUsersFailed(error)));
  
    }
  }
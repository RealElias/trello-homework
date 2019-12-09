import { getUsersInit, getUsersSuccess, getUsersFailed } from '../../core/users/actions'
import LocalStorageItem from '../../core/constants/localStorageItems'

export function getUsers() {
  return function (dispatch) {
    dispatch(getUsersInit())
    const token = localStorage.getItem(LocalStorageItem.TOKEN)

    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: { authorization: token },
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          dispatch(getUsersSuccess(response.data));
        } else {
          dispatch(getUsersFailed(response));
        }
      })
    }).catch((error) => dispatch(getUsersFailed(error)));

  }
}
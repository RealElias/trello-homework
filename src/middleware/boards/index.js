import { getBoardsInit, getBoardsSuccess, getBoardsFailed } from '../../core/boards/actions'
import LocalStorageItem from '../../core/constants/localStorageItems'

export function getBoards() {
  return function (dispatch) {
    dispatch(getBoardsInit())
    const token = localStorage.getItem(LocalStorageItem.TOKEN)

    fetch("http://localhost:3000/boards", {
      method: "GET",
      headers: { authorization: token },
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          dispatch(getBoardsSuccess(response.data));
        } else {
          dispatch(getBoardsFailed(response));
        }
      })
    }).catch((error) => dispatch(getBoardsFailed(error)));

  }
}
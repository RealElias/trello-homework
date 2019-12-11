import { getBoardsInit, getBoardsSuccess, getBoardsFailed, saveBoardInit, saveBoardSuccess, saveBoardFailed } from '../../core/boards/actions'
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

export function saveBoard(board) {
  if (board._id) {
    updateBoard(board)
  } else {
    createBoard(board)
  }
}

function updateBoard({ id, title}) {
  return function (dispatch) {
    dispatch(saveBoardInit(id, title))
    const token = localStorage.getItem(LocalStorageItem.TOKEN)

    fetch("http://localhost:3000/boards/" + id, {
      method: "PUT",
      headers: { 
        authorization: token,
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        title,
      }),
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          dispatch(saveBoardSuccess(response.data));
        } else {
          dispatch(saveBoardFailed(response));
        }
      })
    }).catch((error) => dispatch(saveBoardFailed(error)));
  }
}

function createBoard({ title }) {
  return function (dispatch) {
    dispatch(saveBoardInit())
    const token = localStorage.getItem(LocalStorageItem.TOKEN)

    fetch("http://localhost:3000/boards", {
      method: "POST",
      headers: { 
        authorization: token, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
      })
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          dispatch(saveBoardSuccess(response.data));
        } else {
          dispatch(saveBoardFailed(response));
        }
      })
    }).catch((error) => dispatch(saveBoardFailed(error)));
  }
}

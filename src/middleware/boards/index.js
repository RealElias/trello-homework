import {
  getBoardsInit, getBoardsSuccess, getBoardsFailed,
  getBoardInit, getBoardSuccess, getBoardFailed,
  saveBoardInit, saveBoardSuccess, saveBoardFailed,
  deleteBoardInit, deleteBoardSuccess, deleteBoardFailed
} from '../../core/boards/actions'
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

export function getBoard(id) {
  return function (dispatch) {
    dispatch(getBoardInit())
    const token = localStorage.getItem(LocalStorageItem.TOKEN)

    fetch("http://localhost:3000/boards/" + id, {
      method: "GET",
      headers: { authorization: token },
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          dispatch(getBoardSuccess(response.data));
        } else {
          dispatch(getBoardFailed(response));
        }
      })
    }).catch((error) => dispatch(getBoardFailed(error)));

  }
}

export function saveBoard({ id, title }) {
  console.log(id, title)
  if (id) {
    return updateBoard(id, title)
  } else {
    return createBoard(title)
  }
}

function updateBoard(id, title) {
  return function (dispatch) {
    dispatch(saveBoardInit())
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

function createBoard(title) {
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
          dispatch(saveBoardSuccess(response.data))
        } else {
          dispatch(saveBoardFailed(response))
        }
      })
    }).catch((error) => dispatch(saveBoardFailed(error)))
  }
}

export function deleteBoard(id) {
  return function (dispatch) {
    dispatch(deleteBoardInit())
    const token = localStorage.getItem(LocalStorageItem.TOKEN)

    fetch("http://localhost:3000/boards/" + id, {
      method: "DELETE",
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          dispatch(deleteBoardSuccess());
        } else {
          dispatch(deleteBoardFailed(response));
        }
      })
    }).catch((error) => dispatch(deleteBoardFailed(error)));
  }
}

import ActionType from "../../constants/actionTypes";

export const getBoardsInit = () => ({
  type: ActionType.GET_BOARDS_INIT,
})

export const getBoardsSuccess = ({ boards }) => ({
  type: ActionType.GET_BOARDS_SUCCESS,
  payload: {
    boards,
  }
})

export const getBoardsFailed = ({ message }) => ({
  type: ActionType.GET_BOARDS_FAILED,
  payload: {
    error: message,
  }
})

export const getBoardInit = () => ({
  type: ActionType.GET_BOARD_INIT,
})

export const getBoardSuccess = (board) => ({
  type: ActionType.GET_BOARD_SUCCESS,
  payload: {
    board,
  }
})

export const getBoardFailed = ({ message }) => ({
  type: ActionType.GET_BOARD_FAILED,
  payload: {
    error: message,
  }
})

export const saveBoardInit = () => ({
  type: ActionType.SAVE_BOARD_INIT,
})

export const saveBoardSuccess = ({ board }) => ({
  type: ActionType.SAVE_BOARD_SUCCESS,
  payload: {
    board,
  }
})

export const saveBoardFailed = ({ message }) => ({
  type: ActionType.SAVE_BOARD_FAILED,
  payload: {
    error: message,
  }
})

export const deleteBoardInit = () => ({
  type: ActionType.DELETE_BOARD_INIT,
})

export const deleteBoardSuccess = ({ board }) => ({
  type: ActionType.DELETE_BOARD_SUCCESS,
  payload: {
    board,
  }
})

export const deleteBoardFailed = ({ message }) => ({
  type: ActionType.DELETE_BOARD_FAILED,
  payload: {
    error: message,
  }
})

export const openBoardEditor = () => ({
  type: ActionType.OPEN_BOARD_EDITOR,
})

export const closeBoardEditor = () => ({
  type: ActionType.CLOSE_BOARD_EDITOR,
})
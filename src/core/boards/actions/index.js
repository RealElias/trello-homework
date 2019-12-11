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

export const openBoardEditor = () => ({
  type: ActionType.OPEN_BOARD_EDITOR,
})

export const closeBoardEditor = () => ({
  type: ActionType.CLOSE_BOARD_EDITOR,
})
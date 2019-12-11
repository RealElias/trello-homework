import ActionType from "../../constants/actionTypes";

export const getBoardsInit = () => ({
  type: ActionType.GET_BOARDS_INIT,
})

export const getBoardsSuccess = ({ boards }) => ({
  type: ActionType.GET_BOARDS_SUCCESS,
  payload: {
    boards
  }
})

export const getBoardsFailed = ({ message }) => ({
  type: ActionType.GET_BOARDS_FAILED,
  payload: {
    error: message
  }
})
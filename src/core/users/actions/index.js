import ActionType from "../../constants/actionTypes";

export const getUsersInit = () => ({
  type: ActionType.GET_USERS_INIT,
})

export const getUsersSuccess = ({ users }) => ({
  type: ActionType.GET_USERS_SUCCESS,
  payload: {
    users
  }
})

export const getUsersFailed = ({ message }) => ({
  type: ActionType.GET_USERS_FAILED,
  payload: {
    error: message
  }
})
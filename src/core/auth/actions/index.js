import ActionType from "../../constants/actionTypes";

export const signinInit = ({email, password}) => ({
  type: ActionType.SIGNIN_INIT,
  payload: {
    email,
    password
  }
})

export const signinSuccess = ({token}) => ({
  type: ActionType.SIGNIN_SUCCESS,
  payload: {
    token
  }
})

export const signinFailed = ({message}) => ({
  type: ActionType.SIGNIN_FAILED,
  payload: {
    error: message
  }
})

export const signupInit = ({name, email, password}) => ({
  type: ActionType.SIGNUP_INIT,
  payload: {
    name,
    email,
    password
  }
})

export const signupSuccess = ({token}) => ({
  type: ActionType.SIGNUP_SUCCESS,
  payload: {
    token
  }
})

export const signupFailed = ({message}) => ({
  type: ActionType.SIGNUP_FAILED,
  payload: {
    error: message
  }
})
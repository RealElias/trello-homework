import { SIGNUP_INIT, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../constants/actionTypes";

export const signupInit = ({name, email, password}) => ({
  type: SIGNUP_INIT,
  payload: {
    name,
    email,
    password
  }
})

export const signupSuccess = ({token}) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    token
  }
})

export const signupFailed = ({message}) => ({
  type: SIGNUP_FAILED,
  payload: {
    error: message
  }
})
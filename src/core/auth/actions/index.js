import { SIGNIN_INIT, SIGNIN_SUCCESS, SIGNIN_FAILED, SIGNUP_INIT, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../constants/actionTypes";

export const signinInit = ({email, password}) => ({
  type: SIGNIN_INIT,
  payload: {
    email,
    password
  }
})

export const signinSuccess = ({token}) => ({
  type: SIGNIN_SUCCESS,
  payload: {
    token
  }
})

export const signinFailed = ({message}) => ({
  type: SIGNIN_FAILED,
  payload: {
    error: message
  }
})

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
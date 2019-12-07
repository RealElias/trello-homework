import { SIGNIN_INIT, SIGNIN_SUCCESS, SIGNIN_FAILED } from "../../constants/actionTypes";

export const signinInit = ({email, password}) => ({
  type: SIGNIN_INIT,
  payload: {
    email,
    password
  }
})

export const signinSuccess = (token) => ({
  type: SIGNIN_SUCCESS,
  payload: {
    token
  }
})

export const signinFailed = (error) => ({
  type: SIGNIN_FAILED,
  payload: {
    error
  }
})
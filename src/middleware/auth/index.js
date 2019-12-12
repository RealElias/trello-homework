import { signinInit, signinSuccess, signinFailed, signupInit, signupSuccess, signupFailed, signoutInit, signoutSuccess } from "../../core/auth/actions";
import LocalStorageItem from '../../core/constants/localStorageItems'

export function signin({ email, password }, history) {
  return function (dispatch) {
    dispatch(signinInit({ email, password }))
    fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password,
      })
    }).then((r) => {
      r.json().then(response => {
        if (response.success) {
          localStorage.setItem(LocalStorageItem.TOKEN, response.data.token)
          dispatch(signinSuccess(response.data))
          history.push('/')
        } else {
          dispatch(signinFailed(response))
        }
      })
    }).catch((error) => dispatch(signinFailed(error)))

  }
}

export function signup({ name, email, password }, history) {
  return function (dispatch) {
    dispatch(signupInit({ name, email, password }))
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }).then((r) => {
      r.json().then(response => {
        console.log(response)
        if (response.success) {
          localStorage.setItem(LocalStorageItem.TOKEN, response.data.token)
          dispatch(signupSuccess(response.data))
          history.push('/')
        } else {
          dispatch(signupFailed(response))
        }
      })
    }).catch((error) => dispatch(signupFailed(error)))
  }
}

export function signout() {
  return function(dispatch) {
    dispatch(signoutInit())
    localStorage.removeItem(LocalStorageItem.TOKEN)
    dispatch(signoutSuccess())
  }
}
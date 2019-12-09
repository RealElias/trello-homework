import { signinInit, signinSuccess, signinFailed, signupInit, signupSuccess, signupFailed } from "../../core/auth/actions";

export function signin({ email, password }) {
  return function (dispatch) {
    dispatch(signinInit({ email, password }))
    fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password,
      })
    }).then((response) => {
      response.json().then(response => {
        if (response.success) {
          dispatch(signinSuccess(response.data));
        } else {
          dispatch(signinFailed(response));
        }
      })
    }).catch((error) => dispatch(signinFailed(error)));

  }
}

export function signup({ name, email, password }) {
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
    }).then((response) => {
      response.json().then(data => {
        console.log(data);
        if (data.success) {
          dispatch(signupSuccess(data));
        } else {
          dispatch(signupFailed(data));
        }
      })
    }).catch((error) => dispatch(signupFailed(error)));
  }
}
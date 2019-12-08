import { signinSuccess, signinFailed } from "../../core/auth/actions";

function authorize({email, password}) {
  return function (dispatch) {
    fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      body: {
        email,
        password,
      }
    })
    .then(
      (data) => dispatch(signinSuccess(data.token)),
      (error) => dispatch(signinFailed(error))
    );
  }
}

// function signup() {
//   return function (dispatch, getState) {
//     fetch("http://localhost:3000/auth/signup", {
//       method: "POST",
//       body: {
//         email: this.state.email,
//         password: this.state.password,
//       }
//     })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => console.log(error));
//     console.log(this.state.email + ':' + this.state.password);
//   }
// }
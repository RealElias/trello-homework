import React, { Component } from 'react'
import Input from '../../components/input'
import { signinInit } from '../../core/actions/signin'

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    signinInit(this.state);
    // fetch("http://localhost:3000/auth/signin", {
    //   method: "POST",
    //   body: {
    //     email: this.state.email,
    //     password: this.state.password,
    //   }
    // })
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => console.log(error));
    // console.log(this.state.email + ':' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Input
            value={this.state.email}
            type='email'
            placeholder = 'email'
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <Input
            value={this.state.password}
            type='password'
            placeholder = 'password'
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    )
  }
}

export default SignInContainer;
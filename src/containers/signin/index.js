import React, { Component } from 'react'
import Input from '../../components/input'
import { connect } from 'react-redux'
import { signinInit } from '../../core/auth/actions'

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      inProgress: false,
    }
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    this.props.signinInit(this.state);
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
    console.log(this.state)
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Input
            value={this.state.email}
            type='email'
            placeholder = 'email'
            onChange={this.handleEmailChange}
            enabled={!this.state.inProgress}
          />
        </div>
        <div>
          <Input
            value={this.state.password}
            type='password'
            placeholder = 'password'
            onChange={this.handlePasswordChange}
            enabled={!this.state.inProgress}
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  signinInit,
}

function mapStateToProps(state) {
  const { inProgress } = state
  return { inProgress }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
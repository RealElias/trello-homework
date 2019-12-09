import React, { Component } from 'react'
import Input from '../../components/input'
import { connect } from 'react-redux'
import { signin } from '../../middleware/auth'

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

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.signin(this.state);
  }

  render() {
    const { inProgress } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Input
            value={this.state.email}
            type='email'
            placeholder = 'email'
            onChange={this.handleEmailChange}
            disabled={inProgress}
          />
        </div>
        <div>
          <Input
            value={this.state.password}
            type='password'
            placeholder = 'password'
            onChange={this.handlePasswordChange}
            disabled={inProgress}
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
  signin,
}

function mapStateToProps(state) {
  const { inProgress } = state.auth
  return { inProgress }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
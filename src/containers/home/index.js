import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../middleware/users'
import UserList from '../../components/userList';

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.onGetUsersClick = this.onGetUsersClick.bind(this)

    this.state = {
      users: [],
      inProgress: false,
    }
  }

  onGetUsersClick(event) {
    event.preventDefault()

    this.props.getUsers()
  }

  render() {
    const { users, inProgress } = this.props;
    return (
      <div>
        <UserList
          users={users}
          inProgress={inProgress}
        />
        <br />
        <div>
          <button onClick={this.onGetUsersClick}>Get Users</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getUsers,
}

function mapStateToProps(state) {
  const { inProgress, users } = state.users
  return { inProgress, users }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
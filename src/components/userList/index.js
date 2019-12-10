import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {

  render() {
    let { users, inProgress } = this.props
    if (users.length === 0) {
      return (<h1>No users found.</h1>)
    }

    return (
      <table disabled={inProgress}>
        <thead>
          <tr>
            <th>Name</th>
            <th>EMail</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({_id, name, email, createdAt, updatedAt}) => {
            return (<tr key={_id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{createdAt}</td>
              <td>{updatedAt}</td>
            </tr>)
          })}
        </tbody>
      </table>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  inProgress: PropTypes.bool.isRequired,
}

UserList.defaultProps = {
  users: [],
  inProgress: false,
}

export default UserList;
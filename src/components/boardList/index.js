import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardList extends Component {

  render() {
    let { boards, inProgress } = this.props
    if (boards.length === 0) {
      return (<h1>No boards found.</h1>)
    }

    return (
      <table disabled={inProgress}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Users</th>
            <th>Columns</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {boards.map(({_id, title, users, columns, createdAt, updatedAt}) => {
            return (<tr key={_id}>
              <td>{title}</td>
              <td>{users}</td>
              <td>{columns}</td>
              <td>{createdAt}</td>
              <td>{updatedAt}</td>
            </tr>)
          })}
        </tbody>
      </table>
    )
  }
}

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  inProgress: PropTypes.bool.isRequired,
}

BoardList.defaultProps = {
    boards: [],
  inProgress: false,
}

export default BoardList;
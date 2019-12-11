import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardPreview from '../../components/boardPreview'

class BoardList extends Component {

  render() {
    let { boards, inProgress } = this.props
    if (boards.length === 0) {
      return (<h1>No boards found.</h1>)
    }

    return (
      <ul disabled={inProgress}>
        {boards.map(({_id, title}) => {
          return (<BoardPreview
             id={_id}
             title={title}
          />)
        })}
      </ul>
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
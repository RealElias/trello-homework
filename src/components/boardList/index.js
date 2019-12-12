import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardPreview from '../../components/boardPreview'

class BoardList extends Component {

  render() {
    let { boards, inProgress, onEditClick, onDeleteClick } = this.props
    if (boards.length === 0) {
      return (<h1>No boards found.</h1>)
    }

    return (
      <div disabled={inProgress}>
        {boards.map(({_id, title}) => {
          return (<BoardPreview key={_id}
             id={_id}
             title={title}
             onEditClick={onEditClick(_id)}
             onDeleteClick={onDeleteClick(_id)}
          />)
        })}
      </div>
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
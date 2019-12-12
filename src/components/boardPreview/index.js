import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

class BoardPreview extends Component {

  render() {
    const { id, title, onEditClick, onDeleteClick } = this.props;
    return (
      <div className='boardPreview'>
        <a href={'/board/' + id}>
          <div id='title'>{title}</div>
        </a>
        {/* <Button 
          value='Edit'
          onClick={onEditClick}
        />
        <Button 
          value='Delete'
          onClick={onDeleteClick}
        /> */}
      </div>
    )
  }
}

BoardPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BoardPreview;
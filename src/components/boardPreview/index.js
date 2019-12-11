import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardPreview extends Component {

  render() {
    const { id, title } = this.props;
    return (
      <div class='boardPreview'>
        <a href={'/board/' + id}>
          <div id='title'>{title}</div>
        </a>
      </div>
    )
  }
}

BoardPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BoardPreview;
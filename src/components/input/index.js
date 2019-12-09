import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  render() {
    return (
      <div>
        <input
          value={this.props.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  enabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  enabled: true,
}

export default Input;
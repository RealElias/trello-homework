import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const { onClick, disabled, value } = this.props;
    return (
      <div>
        <input
          type='button'
          value={value}
          disabled={disabled}
          onClick={onClick}
        />
      </div>
    )
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  value: '',
  disabled: false,
}

export default Button;
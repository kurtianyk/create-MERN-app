import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

const Button = ({
  id,
  type,
  onClick,
  text,
  modifier,
  className,
  isLoading,
  isDisabled,
}) => (
  <button
    id={id}
    type={type}
    className={`button button-${modifier} ${className}`}
    onClick={isLoading ? null : onClick}
    disabled={isDisabled}
  >
    <span>{text}</span>
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  modifier: PropTypes.oneOf([
    'default',
    'primary',
    'danger',
    'success',
  ]),
  className: PropTypes.string,
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  id: `button_${nanoid(5)}`,
  className: null,
  onClick: null,
  modifier: 'default',
  type: 'button',
  text: 'Button',
  isLoading: false,
  isDisabled: false,
};

export default Button;

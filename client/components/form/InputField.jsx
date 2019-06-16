import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

const InputField = ({
  id,
  type,
  value,
  name,
  onChange,
  className,
  placeholder,
  autoComplete,
  isDisabled,
  isInvalid,
  isValid,
  maxLength,
}) => (
  <input
    id={id}
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    className={`input-field ${className} ${isInvalid && 'invalid'} ${isValid && 'valid'}`}
    placeholder={placeholder}
    autoComplete={autoComplete ? 'on' : 'off'}
    disabled={isDisabled}
    maxLength={maxLength}
  />
);

InputField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  maxLength: PropTypes.number,
};

InputField.defaultProps = {
  id: `input-field_${nanoid(5)}`,
  type: 'text',
  value: '',
  name: '',
  className: null,
  onChange: null,
  placeholder: '',
  autoComplete: false,
  isDisabled: false,
  isInvalid: false,
  isValid: false,
  maxLength: null,
};

export default InputField;

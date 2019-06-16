import React from 'react';
import PropTypes from 'prop-types';

const Label = ({
  htmlFor,
  children,
  className,
}) => (
  <label
    className={`label ${className}`}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
};
Label.defaultProps = {
  children: 'Label',
  className: null,
};

export default Label;

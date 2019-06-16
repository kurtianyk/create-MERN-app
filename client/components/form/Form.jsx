import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  onSubmit,
  children,
  className,
}) => {
  if (!children) return null;

  return (
    <form
      className={className}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
    PropTypes.array,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};
Form.defaultProps = {
  className: null,
};

export default Form;

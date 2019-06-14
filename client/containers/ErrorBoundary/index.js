import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this?.state?.hasError) {
      // You can render any custom fallback UI
      const { errorMessage } = this.props;
      return (
        <div>
          {errorMessage || 'Something went wrong'}
        </div>
      );
    }
    return this?.props?.children;
  }
}

ErrorBoundary.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorBoundary;

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteProps = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => (<Component {...routeProps} {...rest} />)}
  />
);

RouteProps.propTypes = {
  component: PropTypes.func.isRequired,
};

export default RouteProps;

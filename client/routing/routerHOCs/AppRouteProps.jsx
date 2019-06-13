import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppRouteProps = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => (
      <Layout {...routeProps} {...rest}>
        <Component {...routeProps} {...rest} />
      </Layout>
    )}
  />
);

AppRouteProps.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export default AppRouteProps;

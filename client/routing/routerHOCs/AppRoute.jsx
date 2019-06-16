import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => (
      <Layout>
        <Component {...routeProps} />
      </Layout>
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
};

export default AppRoute;


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from 'Layout/MainLayout';

import ExamplePage from 'Containers/ExamplePage/LazyComponent';
import NoMatch from 'Containers/NoMatch/LazyComponent';

import AppRouteProps from './router/AppRouteProps';

const Routes = () => (
  <Router>
    <Switch>
      <AppRouteProps path="/" layout={MainLayout} component={ExamplePage} exact />
      <Route path="/*" component={NoMatch} />
    </Switch>
  </Router>
);

export default Routes;

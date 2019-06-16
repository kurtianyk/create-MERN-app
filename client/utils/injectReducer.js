import React from 'react';
import PropTypes from 'prop-types';
import { store } from '../App';

export default ({ key, reducer }) => (WrappedComponent) => {
  const ReducerInjector = (props, sr) => {
    console.log(sr, 'store');
    store.injectReducer(key, reducer);

    return <WrappedComponent {...props} />;
  };

  ReducerInjector.contextTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
      replaceReducer: PropTypes.func.isRequired,
    }),
  };

  return ReducerInjector;
};

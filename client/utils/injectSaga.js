import React from 'react';
import PropTypes from 'prop-types';

const sagasList = {};
export default ({ key, saga }) => (WrappedComponent) => {
  const SagaInjector = (props, { store }) => {
    if (!sagasList[key]) {
      store.injectSaga(key, saga);
      sagasList[key] = true;
    }

    return <WrappedComponent {...props} />;
  };

  SagaInjector.contextTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
      replaceReducer: PropTypes.func.isRequired,
    }),
  };

  return SagaInjector;
};

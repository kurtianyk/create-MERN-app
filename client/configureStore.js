import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

  const store = createStore(
    state => state,
    fromJS(initialState),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  store.injectReducer = (key, reducer) => {
    if (store.injectedReducers[key] === reducer) return;
    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };

  store.injectSaga = (key, saga) => {
    if ('key' in store.injectedSagas && store.injectedSagas[key].saga !== saga) store.injectedSagas[key].task.cancel();
    store.injectedSagas[key] = { saga, task: store.runSaga(saga) };
  };

  return store;
}

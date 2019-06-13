import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import throttle from 'lodash/throttle';

import { saveState, loadState } from './utils/localStorage';
import configureStore from './configureStore';

import Routes from './routing/Routes';
// import ErrorPage from './containers/ErrorPage/LazyComponent';

const App = () => <Routes />;

const initialState = loadState() || {};
const store = configureStore(initialState);


/**
 * Persist state to Local Storage across browser sessions
 */

// store.subscribe(throttle(() => {
//   saveState({
//     example: store.getState().get('example'),
//   });
// }, 1000));

render(
  <Provider store={store}>
    {/* <ErrorPage errorMessage='Ooops, smth went wrong'> */}
      <App />
    {/* </ErrorPage> */}
   </Provider>,
  document.getElementById('react-root'),
);

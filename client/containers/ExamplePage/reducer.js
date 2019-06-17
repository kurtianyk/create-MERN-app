import { fromJS } from 'immutable';

import {
  EXAMPLE_FETCH_INIT,
  EXAMPLE_FETCH_SUCCESS,
  EXAMPLE_FETCH_FAILURE,

  EXAMPLE_ADD_INIT,
  EXAMPLE_ADD_SUCCESS,
  EXAMPLE_ADD_FAILURE,

  EXAMPLE_UPDATE_INIT,
  EXAMPLE_UPDATE_SUCCESS,
  EXAMPLE_UPDATE_FAILURE,

  EXAMPLE_DELETE_INIT,
  EXAMPLE_DELETE_SUCCESS,
  EXAMPLE_DELETE_FAILURE,
} from './constants';

const initialState = fromJS({
  example: [],
  isLoading: false,
  showError: false,
  errorMessage: '',
});

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_FETCH_INIT:
      return state
        .set('isLoading', true)
        .set('showError', false)
        .set('errorMessage', '');
    case EXAMPLE_FETCH_SUCCESS:
      return state
        .set('isLoading', false)
        .set('example', fromJS(action.example));
    case EXAMPLE_FETCH_FAILURE:
      return state
        .set('isLoading', false)
        .set('example', fromJS([]))
        .set('showError', true)
        .set('errorMessage', action.message);

    case EXAMPLE_ADD_INIT:
      return state
        .set('isLoading', true)
        .set('showError', false)
        .set('errorMessage', '');
    case EXAMPLE_ADD_SUCCESS:
      return state
        .set('isLoading', false)
        .set('example', fromJS(action.example));
    case EXAMPLE_ADD_FAILURE:
      return state
        .set('isLoading', false)
        .set('showError', true)
        .set('errorMessage', action.message);

    case EXAMPLE_UPDATE_INIT:
      return state
        .set('isLoading', true)
        .set('showError', false)
        .set('errorMessage', '');
    case EXAMPLE_UPDATE_SUCCESS:
      return state
        .set('isLoading', false)
        .set('example', fromJS(action.example));
    case EXAMPLE_UPDATE_FAILURE:
      return state
        .set('isLoading', false)
        .set('showError', true)
        .set('errorMessage', action.message);

    case EXAMPLE_DELETE_INIT:
      return state
        .set('isLoading', true)
        .set('showError', false)
        .set('errorMessage', '');
    case EXAMPLE_DELETE_SUCCESS:
      return state
        .set('isLoading', false)
        .delete(action.example);
    case EXAMPLE_DELETE_FAILURE:
      return state
        .set('isLoading', false)
        .set('showError', true)
        .set('errorMessage', action.message);

    default:
      return state;
  }
}

export default exampleReducer;

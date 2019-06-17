
import { fromJS } from 'immutable';

import exampleReducer from '../reducer';
import {
  EXAMPLE_FETCH_INIT,
  EXAMPLE_FETCH_SUCCESS,
  EXAMPLE_FETCH_FAILURE,
} from '../constants';

const initialState = fromJS({
  example: [],
  isLoading: false,
  showError: false,
  errorMessage: '',
});

// example of reducer testing
describe('exampleReducer', () => {
  it('should have initial state', () => {
    expect(exampleReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle SERVICES_MILESTONE_FETCH_INIT', () => {
    const action = {
      type: EXAMPLE_FETCH_INIT,
    };
    expect(exampleReducer(initialState, action)).toEqual(
      initialState
        .set('isLoading', true)
        .set('showError', false)
        .set('errorMessage', '')
    );
  });

  it('should handle EXAMPLE_FETCH_SUCCESS', () => {
    const example = {
      somedata1: 'somedata',
      somedata2: 'somedata',
    };
    const action = {
      type: EXAMPLE_FETCH_SUCCESS,
      example,
    };
    expect(exampleReducer(initialState, action)).toEqual(
      initialState
        .set('isLoading', false)
        .set('example', fromJS(action.example))
    );
  });

  it('should handle EXAMPLE_FETCH_FAILURE', () => {
    const action = {
      type: EXAMPLE_FETCH_FAILURE,
      message: '',
    };
    expect(exampleReducer(initialState, action)).toEqual(
      initialState
        .set('isLoading', false)
        .set('example', fromJS([]))
        .set('showError', true)
        .set('errorMessage', action.message)
    );
  });
});

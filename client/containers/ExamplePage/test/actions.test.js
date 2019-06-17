import {
  EXAMPLE_FETCH_INIT,
  EXAMPLE_FETCH_SUCCESS,
  EXAMPLE_FETCH_FAILURE,
} from '../constants';

import {
  fetchExampleInit,
  fetchExampleSuccess,
  fetchExampleFailure,
} from '../actions';

// example of action creators testing
describe('ExamplePage actions', () => {
  describe('actionCreator fetchExampleInit', () => {
    it('has a type of EXAMPLE_FETCH_INIT', () => {
      const expected = {
        type: EXAMPLE_FETCH_INIT,
      };
      expect(fetchExampleInit()).toEqual(expected);
    });
  });

  describe('actionCreator fetchExampleSuccess', () => {
    const example = {
      somedata1: 'somedata',
      somedata2: 'somedata',
    };
    it('has a type of EXAMPLE_FETCH_SUCCESS', () => {
      const expected = {
        type: EXAMPLE_FETCH_SUCCESS,
        example,
      };
      expect(fetchExampleSuccess(example)).toEqual(expected);
    });
  });

  describe('actionCreator fetchExampleFailure', () => {
    it('has a type of EXAMPLE_FETCH_FAILURE', () => {
      const message = 'some message';
      const expected = {
        type: EXAMPLE_FETCH_FAILURE,
        message,
      };
      expect(fetchExampleFailure(message)).toEqual(expected);
    });
  });
});

import { put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { fetchExample } from '../saga';

import {
  fetchExampleSuccess,
} from '../actions';

// example of saga testing
describe('ExamplePage sagas', () => {
  const example = {
    somedata1: 'somedata',
    somedata2: 'somedata',
  };

  const mockapi = {
    fetchExample: () => ({
      ok: true,
      data: example,
    })
  };

  it('should fetch example successfull', () => {
    const sagaGeneratorFetchExample = cloneableGenerator(fetchExample)();
    const cloneFetchExample = sagaGeneratorFetchExample.clone();
    cloneFetchExample.next();
    expect(cloneFetchExample.next(mockapi.fetchExample()).value).toEqual(put(fetchExampleSuccess(example)));
    expect(cloneFetchExample.next().done).toEqual(true);
  });
});

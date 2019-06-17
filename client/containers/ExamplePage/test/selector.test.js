import { fromJS } from 'immutable';

import {
  selectExamplePageContainerDomain,
} from '../selector';

// example of selectors testing
describe('selectExamplePageContainerDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      examplePageContainer: globalState,
    });
    expect(selectExamplePageContainerDomain(mockedState)).toEqual(globalState);
  });
});

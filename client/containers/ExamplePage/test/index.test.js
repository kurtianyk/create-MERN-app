import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import ExamplePage from '../index';

describe('<ServiceManager />', () => {
  const initialState = fromJS({
    example: {},
    isLoading: false,
    showError: false,
    errorMessage: '',
  });
  it('should render the component', () => {
    const renderedComponent = shallow(
      <ExamplePage examplePageContainer={initialState} />
    );
    expect(renderedComponent).toMatchSnapshot();
    expect(renderedComponent.length).toEqual(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

// example of dumb component testing
describe('Button', () => {
  const mockFn = jest.fn();
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Button id="button" type="submit" modifier="green" text="Submit" onClick={mockFn} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a button value', () => {
    const wrapper = shallow(
      <Button id="button" type="submit" modifier="green" text="Submit" onClick={mockFn} />
    );
    expect(typeof (wrapper.find('.button').getElement().props.type)).toBe('string');
    expect(wrapper.find('.button').getElement().props.type).toEqual('submit');
  });
  it('should have a click function', () => {
    const wrapper = shallow(
      <Button id="button" type="submit" modifier="green" text="Submit" onClick={mockFn} />
    );
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});

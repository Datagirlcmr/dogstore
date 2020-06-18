import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import DogDisplay from '../../container/DogDisplay';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(<Provider store={store}><DogDisplay /></Provider>);
  return component;
};

describe('Dog List', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should not render any header', () => {
    expect(component.find('h1').length).toBe(0);
  });

  it('should not render any span element', () => {
    expect(component.find('span').length).toBe(0);
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from '../../component/Filter';


Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Filter value="default" onChange={() => 'mock values'} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one select element', () => {
    expect(component.find('select').length).toBe(1);
  });

  it('should render one div element', () => {
    expect(component.find('div').length).toBe(1);
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breed from '../../component/Breed';

const defaultTest = {
  names: ['african', 'hound'],
};

const { names } = defaultTest;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const breedComponent = shallow(
    <Breed
      names={names}
    />,
  );
  return breedComponent;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render three div elements', () => {
    expect(component.find('div').length).toBe(3);
  });

  it('should render one h1 element', () => {
    expect(component.find('h1').length).toBe(1);
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../../component/Image';

const defaultTest = {
  image: ['url1', 'url2'],
};

const { image } = defaultTest;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const imageComponent = shallow(
    <Image
      image={image}
    />,
  );
  return imageComponent;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one image element', () => {
    expect(component.find('img').length).toBe(1);
  });
});

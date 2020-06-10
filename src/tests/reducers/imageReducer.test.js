import imageReducer from '../../reducers/image';

const defaultState = {
  image: [],
};

describe('the image reducer', () => {
  it('should return the initial state of the breeds', () => {
    expect(imageReducer([], {
      type: 'ALL_IMAGES',
      image: ['url1', 'url2'],
    })).toEqual({ image: ['url1', 'url2'] });
  });

  it('should return the state after fetching data', () => {
    expect(imageReducer(defaultState, { type: 'ALL_IMAGES', image: ['url1', 'url2'] })).toEqual({ ...defaultState, image: ['url1', 'url2'] });
  });
});

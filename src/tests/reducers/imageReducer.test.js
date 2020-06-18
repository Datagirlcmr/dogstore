import imageReducer from '../../reducers/image';

describe('the bimage reducer', () => {
  it('should return the initial state of the images', () => {
    expect(imageReducer(undefined, [])).toEqual([]);
  });

  it('should return the state after fetching data', () => {
    expect(imageReducer([], { type: 'ALL_IMAGES', image: ['a', 'b'] })).toEqual(['a', 'b']);
  });
});

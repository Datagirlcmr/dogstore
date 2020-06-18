import breedReducer from '../../reducers/breed';

describe('the breed reducer', () => {
  it('should return the initial state of the breeds', () => {
    expect(breedReducer(undefined, [])).toEqual([]);
  });

  it('should return the state after fetching data', () => {
    expect(breedReducer([], { type: 'ALL_BREEDS', breed: ['a', 'b'] })).toEqual(['a', 'b']);
  });
});

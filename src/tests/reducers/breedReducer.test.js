import breedReducer from '../../reducers/breed';

const defaultState = {
  breed: [],
};

describe('the breed reducer', () => {
  it('should return the initial state of the breeds', () => {
    expect(breedReducer([], {
      type: 'ALL_BREEDS',
      breed: ['african', 'hound'],
    })).toEqual({ breed: ['african', 'hound'] });
  });

  it('should return the state after fetching data', () => {
    expect(breedReducer(defaultState, { type: 'ALL_BREEDS', breed: ['african', 'hound'] })).toEqual({ ...defaultState, breed: ['african', 'hound'] });
  });
});

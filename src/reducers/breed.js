const defaultState = {
  breed: [],
};

const breedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ALL_BREEDS':
      return {
        ...state,
        breed: action.breed,
      };

    default:
      return state;
  }
};

export default breedReducer;

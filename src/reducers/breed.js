const breedReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_BREEDS':
      return action.breed;

    default:
      return state;
  }
};

export default breedReducer;

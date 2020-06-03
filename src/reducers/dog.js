
const dogReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_DOGS':
      return action.breed;

    default:
      return state;
  }
};

export default dogReducer;

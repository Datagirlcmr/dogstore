const imageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_IMAGES':
      return action.image;
    default:
      return state;
  }
};

export default imageReducer;

const defaultState = {
  image: [],
};

const imageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ALL_IMAGES':
      return {
        ...state,
        image: action.image,
      };

    default:
      return state;
  }
};

export default imageReducer;

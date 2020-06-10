const FETCH_BREEDS = () => ({
  type: 'FETCH_BREEDS',
});

const ALL_BREEDS = breed => ({
  type: 'ALL_BREEDS',
  breed,
});

const FETCH_IMAGES = () => ({
  type: 'FETCH_IMAGES',
});

const ALL_IMAGES = image => ({
  type: 'ALL_IMAGES',
  image,
});

function fetchBreeds() {
  return dispatch => {
    dispatch(FETCH_BREEDS());
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const { message } = data;
        const breeds = Object.keys(message);
        dispatch(ALL_BREEDS(breeds));
        return breeds;
      });
  };
}

function fetchSingleBreed(name) {
  return dispatch => {
    dispatch(FETCH_IMAGES());
    fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then(response => response.json())
      .then(data => {
        const { message } = data;
        dispatch(ALL_IMAGES(message));
        return message;
      });
  };
}

export {
  ALL_BREEDS, ALL_IMAGES, fetchBreeds, fetchSingleBreed,
};

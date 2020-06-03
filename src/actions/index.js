const ALL_BREEDS = breed => ({
  type: 'ALL_BREEDS',
  breed,
});

const ALL_IMAGES = image => ({
  type: 'ALL_IMAGES',
  image,
});

const FILTER = filter => ({
  type: 'FILTER',
  filter,
});

export { ALL_BREEDS, ALL_IMAGES, FILTER };

const ALL_DOGS = breed => ({
  type: 'ALL_DOGS',
  breed,
});

const FILTER = filter => ({
  type: 'FILTER',
  filter,
});

export { ALL_DOGS, FILTER };

import { ALL_IMAGES, ALL_BREEDS } from '../../src/actions/index';

describe('All Breeds', () => {
  it('should create an action of getting all breeds', () => {
    const text = 'african';
    const expectedAction = {
      type: 'ALL_BREEDS',
      breed: text,
    };
    expect(ALL_BREEDS(text)).toEqual(expectedAction);
  });
});

describe('All Images', () => {
  it('should create an action of getting all image', () => {
    const urls = 'all urls';
    const expectedAction = {
      type: 'ALL_IMAGES',
      image: urls,
    };
    expect(ALL_IMAGES(urls)).toEqual(expectedAction);
  });
});

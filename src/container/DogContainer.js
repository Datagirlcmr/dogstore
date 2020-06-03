import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ALL_IMAGES, ALL_BREEDS, FILTER } from '../actions';
import Breed from '../component/Breed';

const mapStateToProps = state => ({
  breed: state.breedReducer,
  image: state.imageReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = dispatch => ({
  showbreed: breed => dispatch(ALL_BREEDS(breed)),
  showimage: image => dispatch(ALL_IMAGES(image)),
  filterInput: string => dispatch(FILTER(string)),
});

const DogList = ({ showbreed, breed }) => {
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const { message } = data;
        const breeds = Object.keys(message);
        showbreed(breeds);
      });
  }, [showbreed]);

  return (
    <div>
      <Breed names={breed} />
    </div>
  );
};

DogList.propTypes = {
  showbreed: PropTypes.func.isRequired,
  breed: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogList);

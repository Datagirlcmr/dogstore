import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBreeds, fetchSingleBreed } from '../actions';
import Breed from '../component/Breed';

const mapStateToProps = state => ({
  breed: state.breedReducer,
  image: state.imageReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = {
  fetchBreeds,
  fetchSingleBreed,
};

const DogList = ({ fetchBreeds, breed }) => {
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <div>
      <Breed names={breed} />
    </div>
  );
};

DogList.propTypes = {
  fetchBreeds: PropTypes.func.isRequired,
  breed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogList);

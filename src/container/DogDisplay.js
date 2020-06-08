import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBreeds, fetchSingleBreed } from '../actions';
import Image from '../component/Image';

const mapStateToProps = state => ({
  breed: state.breedReducer,
  image: state.imageReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = {
  fetchBreeds,
  fetchSingleBreed,
};

const DogDisplay = props => {
  const { match, image, fetchSingleBreed } = props;
  const { name } = match.params;
  useEffect(() => {
    fetchSingleBreed(name);
  }, [fetchSingleBreed, name]);

  return (
    <div>
      {image.map(url => (
        <Image key={url} image={url} />
      ))}
    </div>
  );
};

DogDisplay.propTypes = {
  image: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  fetchSingleBreed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogDisplay);

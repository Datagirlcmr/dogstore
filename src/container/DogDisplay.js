import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ALL_IMAGES, ALL_BREEDS, FILTER } from '../actions';
import Image from '../component/Image';

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

const DogDisplay = props => {
  const {
    match, showimage, image,
  } = props;
  const { name } = match.params;
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then(response => response.json())
      .then(data => {
        const { message } = data;
        showimage(message);
      });
  }, [showimage, name]);

  return (
    <div>
      {image.map(url => <Image key={url} image={url} />)}
    </div>
  );
};

DogDisplay.propTypes = {
  image: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  showimage: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(DogDisplay);

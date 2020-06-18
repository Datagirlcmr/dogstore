import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => (
  <img className="clipt col-md-3 ml-5 mr-3 mt-5" src={image} alt={image} />
);

Image.propTypes = {
  image: PropTypes.func.isRequired,
};

export default Image;

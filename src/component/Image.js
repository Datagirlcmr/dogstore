import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => (
  <div>
    {image.map(url => (
      <img src={url} key={url} alt={url} />
    ))}
  </div>

);

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;

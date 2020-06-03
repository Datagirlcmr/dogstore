import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breed = ({ names }) => (
  <div className="f-wrap">
    {names.map(name => (
      <div className="card" key={name}>
        {' '}
        <Link to={`/categories/${name}`}>
          {name}
        </Link>

        {' '}
      </div>
    ))}
  </div>

);

Breed.propTypes = {
  names: PropTypes.arrayOf.isRequired,
};

export default Breed;

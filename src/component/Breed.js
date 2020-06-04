import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breed = ({ names }) => (
  <div className="container-fluid d-flex flex-wrap">
    <h1 className="blinky-text col-md-10">Click any breed to see dog pictures for that breed</h1>
    {names.map(name => (
      <div
        className="card jumbotron col-md-3 ml-5 mr-3 mt-5 p-5"
        key={name}
      >
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
  names: PropTypes.func.isRequired,
};

export default Breed;

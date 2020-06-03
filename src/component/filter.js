import React from 'react';
import PropTypes from 'prop-types';

const Breed = ({ breed }) => (
  <div className="select">
    <select className="card">
      <option value="All">Select a Breed</option>
      {breed.map(el => (
        <option key={el} value={el}>{el}</option>
      ))}
    </select>
  </div>
);

Breed.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default Breed;

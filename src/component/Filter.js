import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter }) => (
  <div className="select">
    <select className="card">
      <option value="All">Select a Breed</option>
      {filter.map(el => (
        <option key={el} value={el}>{el}</option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.arrayOf.isRequired,
};

export default Filter;
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter }) => (
  <div className="select">
    <select className="">
      <option value="All">Select a Breed</option>
      {filter.map(el => (
        <option key={el} value={el}>{el}</option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;

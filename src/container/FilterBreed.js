import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSingleBreed } from '../actions';
import Filter from '../component/Filter';
import DogDisplay from './DogDisplay';

const mapDispatchToProps = {
  fetchSingleBreed,
};

const SelectBreed = ({ fetchSingleBreed, match }) => {
  const handleChange = event => {
    const selected = event.target.value;
    fetchSingleBreed(selected);
  };

  return (
    <div>
      <Filter onChange={handleChange} />
      <DogDisplay match={match} />
    </div>
  );
};

SelectBreed.propTypes = {
  fetchSingleBreed: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SelectBreed);

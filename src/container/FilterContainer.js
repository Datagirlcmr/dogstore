import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ALL_IMAGES, ALL_BREEDS, FILTER } from '../actions';
import Filter from '../component/Filter';

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

const FilterContainer = ({ filterInput, filter }) => {
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const { message } = data;
        const breeds = Object.keys(message);
        filterInput(breeds);
      });
  }, [filterInput]);

  return (
    <div>
      <Filter filter={filter} />
    </div>
  );
};

FilterContainer.propTypes = {
  filterInput: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);

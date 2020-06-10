import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBreeds, fetchSingleBreed } from '../actions';
import Breed from '../component/Breed';
import Pagination from '../component/Pagination';

const mapStateToProps = state => ({
  breed: state.breedReducer,
  image: state.imageReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = {
  fetchBreeds,
  fetchSingleBreed,
};


const DogList = ({ fetchBreeds, breed }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [breedsPerPage] = useState(15);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  const indexofLastBreed = currentPage * breedsPerPage;
  const indexofFirstBreed = indexofLastBreed - breedsPerPage;
  const currentBreeds = breed.slice(indexofFirstBreed, indexofLastBreed);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(breed.length / breedsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Breed names={currentBreeds} />
      <Pagination
        breedsPerPage={breedsPerPage}
        totalBreeds={breed.length}
        pageNumbers={pageNumbers}
        paginate={paginate}
      />
    </div>
  );
};

DogList.propTypes = {
  fetchBreeds: PropTypes.func.isRequired,
  breed: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogList);

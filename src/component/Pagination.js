import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pageNumbers, paginate }) => (
  <nav>
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key="number" className="page-item">
          <button type="button" onClick={() => paginate(number)} className="page-link ml-5 p-5">
            {number}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

Pagination.propTypes = {
  pageNumbers: PropTypes.func.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;

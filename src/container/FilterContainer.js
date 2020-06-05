// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ALL_IMAGES, ALL_BREEDS, FILTER } from '../actions';
// import Filter from '../component/Filter';

// const mapStateToProps = state => ({
//   breed: state.breedReducer,
//   image: state.imageReducer,
//   filter: state.filterReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   showbreed: breed => dispatch(ALL_BREEDS(breed)),
//   showimage: image => dispatch(ALL_IMAGES(image)),
//   filterInput: string => dispatch(FILTER(string)),
// });

// const FilterContainer = props => {
//   const {
//     filterInput, filter, breed, showbreed,
//   } = props;

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/list/all')
//       .then(response => response.json())
//       .then(data => {
//         const { message } = data;
//         const breeds = Object.keys(message);
//         showbreed(breeds);
//         breeds.forEach(breed => (
//           fetch(`https://dog.ceo/api/breed/${breed}/images`)
//             .then(response => response.json())
//             .then(data => {
//               const { message } = data;

//               // images of dogs returned per category

//               filterInput(message);
//             })
//         ));
//       });
//   }, [showbreed, filterInput]);

//   return (
//     <div>
//       <Filter breed={breed} filter={filter} />
//     </div>
//   );
// };

// FilterContainer.propTypes = {
//   filterInput: PropTypes.func.isRequired,
//   filter: PropTypes.func.isRequired,
//   breed: PropTypes.func.isRequired,
//   showbreed: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);

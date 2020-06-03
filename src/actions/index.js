const ALL_BREEDS = breed => ({
  type: 'ALL_BREEDS',
  breed,
});

const ALL_IMAGES = image => ({
  type: 'ALL_IMAGES',
  image,
});

const FILTER = filter => ({
  type: 'FILTER',
  filter,
});

// function fetchBreeds() {
//   return dispatch => {
//     // dispatch(fetchProductsPending());
//     fetch('https://dog.ceo/api/breeds/list/all')
//       .then(res => res.json())
//       .then(res => {
//         if (res.error) {
//           throw (res.error);
//         }
//         const { message } = res;
//         const breeds = Object.keys(message);
//         // dispatch(fetchProductsSuccess(res.products);
//         console.log(breeds);
//         return breeds;
//       })
//       .catch(error => {
//         // dispatch(fetchProductsError(error));
//       });
//   };
// }

export {
  ALL_BREEDS, ALL_IMAGES, FILTER,
};

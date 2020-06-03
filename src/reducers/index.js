import { combineReducers } from 'redux';
import dogReducer from './dog';
import filterReducer from './filter';


const reducer = combineReducers({
  dogs: dogReducer,
  filter: filterReducer,
});

export default reducer;

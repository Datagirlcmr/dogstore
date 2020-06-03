import { combineReducers } from 'redux';
import imageReducer from './image';
import breedReducer from './breed';
import filterReducer from './filter';


const rootReducer = combineReducers({ imageReducer, breedReducer, filterReducer });


export default rootReducer;

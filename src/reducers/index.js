import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import imageReducer from './image';
import breedReducer from './breed';
import filterReducer from './filter';


const rootReducer = combineReducers({ imageReducer, breedReducer, filterReducer });


const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

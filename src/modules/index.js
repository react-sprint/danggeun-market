import { combineReducers } from 'redux';
import inputs from './writeStuff';
import { modify } from './profile';

const rootReducer = combineReducers({
  inputs,
  modify,
});

export default rootReducer;

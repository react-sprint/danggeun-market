import { combineReducers } from 'redux';
import profilename from './profile';
import stuffs from './bringStuff';

const rootReducer = combineReducers({
  profilename,
  stuffs,
});

export default rootReducer;

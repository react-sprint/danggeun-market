import { combineReducers } from 'redux';
import profilename from './profile';
import user from './user';
import stuffs from './bringStuff';

const rootReducer = combineReducers({
  profilename,
  user,
  stuffs,
});

export default rootReducer;

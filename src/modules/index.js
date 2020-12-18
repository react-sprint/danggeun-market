import { combineReducers } from 'redux';
import profilename from './profile';
import user from './user';
import neighbor from './neighbor';
import stuffs from './bringStuff';
import filter from './filter';

const rootReducer = combineReducers({
  profilename,
  user,
  neighbor,
  stuffs,
  filter,
});

export default rootReducer;

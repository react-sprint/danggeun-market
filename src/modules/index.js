import { combineReducers } from 'redux';
import profilename from './profile';
import user from './user';
import neighbor from './neighbor';
import stuffs from './bringStuff';

const rootReducer = combineReducers({
  profilename,
  user,
  neighbor,
  stuffs,
});

export default rootReducer;

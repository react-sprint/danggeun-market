import { combineReducers } from 'redux';
import profilename from './profile';
import user from './user';
import neighbor from './neighbor';

const rootReducer = combineReducers({
  profilename,
  user,
  neighbor,
});

export default rootReducer;

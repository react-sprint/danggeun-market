import { combineReducers } from 'redux';
import profilename from './profile';
import user from './user';

const rootReducer = combineReducers({
  profilename,
  user,
});

export default rootReducer;

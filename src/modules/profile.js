import { createAction, handleActions } from 'redux-actions';
import firebase from '../utils/api/fbInstance';

const CHANGE_NAME = 'profile/CHANGE_NAME';
const CHANGE_EMAIL = 'profile/CHANGE_EMAIL';

export const changeName = createAction(CHANGE_NAME, (name) => name);
export const changeEmail = createAction(CHANGE_EMAIL, (email) => email);

const initialState = {
  name: '성윤',
};

const profilename = handleActions(
  {
    [CHANGE_NAME]: (state, { payload: name }) => ({
      ...state,
      name: name,
    }),
  },
  initialState,
);

export default profilename;

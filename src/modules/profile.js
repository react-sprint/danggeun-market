import { createAction, handleActions } from 'redux-actions';

const CHANGE_NAME = 'profile/CHANGE_NAME';

export const changeName = createAction(CHANGE_NAME, (name) => name);

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

import { createAction, handleActions } from 'redux-actions';

const SET_USER = 'user/SET_USER';

export const setUser = createAction(SET_USER, (user) => user);

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

const createuser = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      currentUser: action.payload,
      isLoading: false,
    }),
  },
  initialUserState,
);

// const user2 = (state = initialUserState, action) {
//     switch(action.type) {
//         case SET_USER:
//             return {
//                 ...state,
//                 currentUser: action.payload,
//                 isLoading: false,
//             };
//         default:
//             return state;
//     }
// }

export default createuser;

import { createAction, handleActions } from 'redux-actions';

const SET_USER = 'user/SET_USER';

// export const setUser = createAction(SET_USER, (user) => user);
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

// const user = handleActions(
//   {
//     [SET_USER]: (state, action) => ({
//       ...state,
//       currentUser: action.payload,
//       isLoading: false,
//     }),
//   },
//   initialUserState,
// );

// export default user;

export default function (state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

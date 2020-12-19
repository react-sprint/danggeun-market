const SET_USER = 'user/SET_USER';

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

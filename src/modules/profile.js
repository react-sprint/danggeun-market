import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const MODIFY = 'profile/MODIFY';

// 액션 생성 함수 정의
export const modify = createAction(MODIFY, (input) => input);

// 초기 상태 정의
const initialState = {
  profile: '빠끄',
};

<<<<<<< HEAD
// const profile = (state = initialState, action) => {
//   switch (action.type) {
//     case MODIFY:
//       return {
//         ...state,
//         profile: action.data,
//       };
//     default:
//       return state;
//   }
// };

// export default profile;
=======
const profile = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY:
      return {
        ...state,
        profile: action.data,
      };
    default:
      return state;
  }
};
>>>>>>> profile-redux-flow

export default handleActions(
  {
    [MODIFY]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
  },
  initialState,
);

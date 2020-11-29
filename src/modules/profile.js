// import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const MODIFY = 'profile/MODIFY';

// 액션 생성 함수 정의
// export const modify = createAction(MODIFY);
export const modify = (data) => {
  return {
    type: MODIFY,
    data,
  };
};

// 초기 상태 정의
const initialState = {
  profile: '빠끄',
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY:
      return { ...state, profile: action.data };
    default:
      return state;
  }
};

export default profile;

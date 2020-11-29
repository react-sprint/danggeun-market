import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const MODIFY = 'profile/MODIFY';

// 액션 생성 함수 정의
export const modify = createAction(MODIFY);

// 초기 상태 정의
const initialState = { profile: '' };

const profile = handleActions(
  {
    [MODIFY]: (e) => {
      return e.target.value;
    },
  },
  initialState,
);

export default profile;

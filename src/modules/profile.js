import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_NAME = 'profile/CHANGE_NAME';

// 액션 생성 함수 정의
export const changeName = createAction(CHANGE_NAME, (name) => name);

// 초기 상태 정의
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

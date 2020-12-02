import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_NAME = 'profile/CHANGE_NAME';
const INPUT_CHANGE = 'profile/INPUT/CHANGE';

// 액션 생성 함수 정의
export const changeName = createAction(CHANGE_NAME, (name) => name);
export const inputChange = createAction(INPUT_CHANGE, (input) => input);

// 초기 상태 정의
const initialState = {
  name: '성윤',
  inputName: '',
};

const profilename = handleActions(
  {
    [CHANGE_NAME]: (state, { payload: name }) => ({
      ...state,
      name: name,
    }),
    [INPUT_CHANGE]: (state, { payload: input }) => ({
      ...state,
      inputName: input,
    }),
  },
  initialState,
);

export default profilename;

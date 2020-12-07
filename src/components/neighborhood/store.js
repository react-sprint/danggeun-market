import { createStore } from 'redux';

const initState = {
  mode: 'READY',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return {
        ...state,
        mode: 'FETCH',
      };
    default:
      return state;
  } // action.payload
};
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

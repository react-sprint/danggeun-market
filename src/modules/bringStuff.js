const BRING_STUFF = 'bringStuff/BRING_STUFF';

export const bringStuff = (data) => ({ type: BRING_STUFF, payload: data });

export default function stuffs(state = {}, action) {
  switch (action.type) {
    case BRING_STUFF:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

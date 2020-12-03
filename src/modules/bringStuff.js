const BRING_STUFF = 'bringStuff/BRING_STUFF';

export const bringStuff = (data) => {
  return { type: BRING_STUFF, data };
};

const initalState = {};

export default function stuffs(state = initalState, action) {
  switch (action.type) {
    case BRING_STUFF:
      return console.log(state);
    default:
      return state;
  }
}

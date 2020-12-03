const CHANGE_INPUT = 'writeStuff/CHANGE_INPUT';

export const changeInput = (text) => {
  return {
    type: CHANGE_INPUT,
    input: {
      title: '',
      price: '',
      stuff: '',
    },
  };
};

const initialState = {
  title: '',
  price: '',
  stuff: '',
};

export default function inputs(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return (event) => {
        const {
          target: { value, name },
        } = event;
        console.log(value);
      };
    default:
      return state;
  }
}

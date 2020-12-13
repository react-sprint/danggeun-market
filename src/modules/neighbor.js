const SET_NEIGHBOR = 'neighbor/SET_NEIGHBOR';

export const setNeighbor = (address) => ({
  type: SET_NEIGHBOR,
  address: address,
});

const initialState = {
  address: 'notMyNeighbor',
};

// reducer
const neighbor = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEIGHBOR:
      return {
        address: action.address,
      };
    default:
      return state;
  }
};

export default neighbor;

const SET_NEIGHBOR = 'neighbor/SET_NEIGHBOR';
const SEARCH_ADDRESS = 'neighbor/SEARCH_ADDRESS';

export const setNeighbor = (address) => ({
  type: SET_NEIGHBOR,
  address: address,
});

export const inputAddress = (address, isTyped) => ({
  type: SEARCH_ADDRESS,
  searchAddress: address,
  isTyped: isTyped,
});

const initialState = {
  address: 'notMyNeighbor',
  searchAddress: 'notSearched',
  isTyped: false,
};

// reducer
const neighbor = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEIGHBOR:
      return {
        address: action.address,
      };
    case SEARCH_ADDRESS:
      return {
        searchAddress: action.searchAddress,
        isTyped: action.isTyped,
      };
    default:
      return state;
  }
};

export default neighbor;

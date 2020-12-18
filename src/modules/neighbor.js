const SET_NEIGHBOR = 'neighbor/SET_NEIGHBOR';
const SEARCH_ADDRESS = 'neighbor/SEARCH_ADDRESS';
const SET_SEARCH_ADDRESS = 'neighbor/SET_SEARCH_ADDRESS';
const KEEP_ADDRESS = 'neighbor/KEEP_ADDRESS';

export const setNeighbor = (address) => ({
  type: SET_NEIGHBOR,
  address: address,
});

export const inputAddress = (address, isTyped) => ({
  type: SEARCH_ADDRESS,
  searchAddress: address,
  isTyped: isTyped,
});

export const setSearchAddress = (address, isTyped) => ({
  type: SET_SEARCH_ADDRESS,
  address: address,
  isTyped: isTyped,
});

export const keepAddress = () => ({
  type: KEEP_ADDRESS,
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
        ...state,
        searchAddress: action.searchAddress,
        isTyped: action.isTyped,
      };
    case SET_SEARCH_ADDRESS:
      return {
        ...state,
        address: action.address,
        isTyped: action.isTyped,
      };
    case KEEP_ADDRESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default neighbor;

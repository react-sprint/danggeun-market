const CHECK_FILTER = 'CHECK_filter';

export const checkFilter = (filter) => ({
  type: CHECK_FILTER,
  filter: filter,
});

const initialState = {
  digital_appliance: true,
  furniture_interior: true,
  child_childrenBook: true,
  living_processedFood: true,
  sports_leisure: true,
  womenMiscellaneous: true,
  womenClothing: true,
  menFashion_miscellaneous: true,
  game_hobby: true,
  beauty: true,
  petStuff: true,
  book_ticket_album: true,
  plant: true,
  usedStuff: true,
  buying: true,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_FILTER:
      return {
        ...state,
        [action.filter]: !state[action.filter],
      };
    default:
      return state;
  }
};

export default filter;

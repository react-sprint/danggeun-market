const CHECK_FILTER = 'CHECK_filter';

export const checkFilter = (filter) => ({
  type: CHECK_FILTER,
  filter: filter,
});

const initialState = {
  digital_appliance: true,
  furniture_interior: true,
  living_processedFood: true,
  game_hobby: true,
  beauty: true,
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

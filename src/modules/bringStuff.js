import { dbService } from '../utils/api/fbInstance';

const BRING_STUFF = 'bringStuff/BRING_STUFF';

export const bringStuff = async () => {
  // eslint-disable-next-line prefer-const
  let list = [];
  // eslint-disable-next-line prefer-const
  let data = await dbService.collection('stuffList').get();
  data.forEach((fstore) => list.push(fstore.data()));
  return {
    type: BRING_STUFF,
    payload: list,
  };
};

export default function stuffs(state = {}, action) {
  switch (action.type) {
    case BRING_STUFF:
      console.log(action.payload);

      return { ...state, data: action.payload };
    default:
      return state;
  }
}

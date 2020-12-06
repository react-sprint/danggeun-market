import { dbService } from '../utils/api/fbInstance';

const BRING_STUFF = 'bringStuff/BRING_STUFF';

export const bringStuff = () => ({ type: BRING_STUFF });

// eslint-disable-next-line prefer-const
let list = [];
const getList = async (state) => {
  const stuffList = await dbService.collection('stuffList').get();
  stuffList.forEach((fstore) => list.push(fstore.data()));
  // console.log(list);
  state.concat(list);
  return state;
};

export default function stuffs(state = [], action) {
  switch (action.type) {
    case BRING_STUFF:
      return getList(state);
    default:
      return state;
  }
}

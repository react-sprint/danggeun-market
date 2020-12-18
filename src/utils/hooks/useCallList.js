import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bringStuff } from '../../modules/bringStuff';
import { dbService } from '../api/fbInstance';

const useCallList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dbService
      .collection('stuffList')
      .orderBy('createAt', 'desc')
      .onSnapshot((snapshot) => {
        const stuffArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(bringStuff(stuffArr));
      });
  }, []);
};

export default useCallList;

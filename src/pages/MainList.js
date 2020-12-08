import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { dbService } from '../utils/api/fbInstance';
import { bringStuff } from '../modules/bringStuff';

const MainList = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line prefer-const
  let viewStatus = false;
  const stuff = useSelector((state) => state.stuffs, viewStatus);

  const listView = async () => {
    const list = [];
    const data = await dbService.collection('stuffList').get();
    data.forEach((fstore) => list.push(fstore.data()));

    dispatch(bringStuff(list));
    viewStatus = true;
    console.log(stuff);
  };

  useEffect(() => {
    listView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>HOME</h2>
      <Link to="/write-new-stuff">글쓰기</Link>
      <MenuBar />
    </div>
  );
};

export default MainList;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { dbService } from '../utils/api/fbInstance';
import { bringStuff } from '../modules/bringStuff';
import { Inner } from '../components/layout/Inner';
import DefaultHeader from '../components/layout/DefaultHeader';
import StuffList from '../components/layout/write/StuffList';

const MainList = () => {
  const dispatch = useDispatch();
  const stuff = useSelector((state) => state.stuffs);

  const listView = async () => {
    const list = [];
    const data = await dbService
      .collection('stuffList')
      .orderBy('createAt', 'desc')
      .get();
    data.forEach((fstore) => list.push(fstore.data()));

    dispatch(bringStuff(list));
  };

  useEffect(() => {
    listView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DefaultHeader />
      <Inner>
        {/* <Link to="/write-new-stuff">글쓰기</Link> */}
        <StuffList data={stuff.data} />
      </Inner>
      <MenuBar />
    </div>
  );
};

export default MainList;

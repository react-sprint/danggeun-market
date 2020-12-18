import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { dbService } from '../utils/api/fbInstance';
import { bringStuff } from '../modules/bringStuff';
import { Inner } from '../components/layout/Inner';
import DefaultHeader from '../components/layout/DefaultHeader';
import StuffList from '../components/layout/write/StuffList';
import filterArray from '../utils/filterArray';

const MainList = () => {
  const dispatch = useDispatch();
  const stuff = useSelector((state) => state.stuffs);
  const filterStatus = useSelector((state) => state.filter);

  const listView = async () => {
    const list = [];
    const data = await dbService
      .collection('stuffList')
      .orderBy('createAt', 'desc')
      .get();
    data.forEach((fstore) => list.push(fstore.data()));
    const filter = list.filter((list) => {
      const filterValue = filterArray[list.category - 1].value;
      if (filterStatus[filterValue]) {
        return filterStatus[filterValue];
      }
      return 0;
    });

    dispatch(bringStuff(filter));
  };

  useEffect(() => {
    listView();
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

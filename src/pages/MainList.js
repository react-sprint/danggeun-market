import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';
import { Inner } from '../components/layout/Inner';
import DefaultHeader from '../components/layout/DefaultHeader';
import StuffList from '../components/layout/write/StuffList';
import useCallList from '../utils/hooks/useCallList';
import WritePlus from '../components/layout/write/WritePlus';
import filterArray from '../utils/filterArray';

const MainList = () => {
  const stuff = useSelector((state) => state.stuffs.data);
  const filterStatus = useSelector((state) => state.filter);
  useCallList();

  const filter = stuff?.filter((list) => {
    const filterValue = filterArray[list.category - 1].value;
    if (filterStatus[filterValue]) {
      return filterStatus[filterValue];
    }
    return 0;
  });

  return (
    <div>
      <DefaultHeader />
      <Inner>
        <StuffList data={filter} />
      </Inner>
      <WritePlus />
      <MenuBar />
    </div>
  );
};

export default MainList;

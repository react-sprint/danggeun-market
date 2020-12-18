import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';
import { Inner } from '../components/layout/Inner';
import DefaultHeader from '../components/layout/DefaultHeader';
import StuffList from '../components/layout/write/StuffList';
import useCallList from '../utils/hooks/useCallList';
import WritePlus from '../components/layout/write/WritePlus';

const MainList = () => {
  const stuff = useSelector((state) => state.stuffs);
  useCallList();

  return (
    <div>
      <DefaultHeader />
      <Inner>
        <StuffList data={stuff.data} />
      </Inner>
      <WritePlus />
      <MenuBar />
    </div>
  );
};

export default MainList;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';
import { Inner } from '../components/layout/Inner';
import DefaultHeader from '../components/layout/DefaultHeader';
import StuffList from '../components/layout/write/StuffList';
import useCallList from '../utils/hooks/useCallList';
import WritePlus from '../components/layout/write/WritePlus';
import getLocation from '../components/neighborhood/getLocation';

const MainList = () => {
  const stuff = useSelector((state) => state.stuffs);
  const selecAddr = useSelector(({ neighbor: { address } }) => address);
  const geolocation = getLocation();
  const [addr, setAddr] = useState([]);
  useCallList();

  useEffect(() => {
    geolocation.then((res) => setAddr(Array.from(res)));
  }, []);

  return (
    <div>
      <DefaultHeader addr={addr} selecAddr={selecAddr} />
      <Inner>
        <StuffList data={stuff.data} />
      </Inner>
      <WritePlus />
      <MenuBar />
    </div>
  );
};

export default MainList;

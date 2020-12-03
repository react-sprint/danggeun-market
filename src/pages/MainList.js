import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { dbService } from '../utils/api/fbInstance';

const MainList = () => {
  const getList = async () => {
    const list = await dbService.collection('stuffList').get();
    console.log(list);
  };

  useEffect(() => {
    getList();
  }, []);
  // 리덕스로 옮기면댐
  return (
    <div>
      <h2>HOME</h2>
      <Link to="/write-new-stuff">ss</Link>
      <MenuBar />
    </div>
  );
};

export default MainList;

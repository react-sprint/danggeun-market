import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import { dbService } from '../utils/api/fbInstance';
import { bringStuff } from '../modules/bringStuff';

const MainList = () => {
  const dispatch = useDispatch();
  const stuff = useSelector((state) => state.stuffs);

  useEffect(() => {
    dispatch(bringStuff());
    console.log(stuff);
  }, []);

  return (
    <div>
      <h2>HOME</h2>
      <Link to="/write-new-stuff">ss</Link>
      <MenuBar />
    </div>
  );
};

export default MainList;

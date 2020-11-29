import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/common/BottomNavBar';

const MainList = () => {
  return (
    <div>
      <h2>HOME</h2>
      <Link to="/write-new-stuff">ss</Link>
    <BottomNavBar />
    </div>
  );
};

export default MainList;

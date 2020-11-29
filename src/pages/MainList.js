import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/common/BottomNavBar';

const MainList = () => {
  return (
    <>
      <h2>Item List</h2>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        로그인
      </Link>
      <br />
      <br />
      <br />
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        프로필
      </Link>
      <BottomNavBar />
    </>
  );
};

export default MainList;

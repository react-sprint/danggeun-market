import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';

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
      <MenuBar />
    </>
  );
};

export default MainList;

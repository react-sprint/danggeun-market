import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';

const MainList = () => {
  return (
    <div>
      <h2>HOME</h2>
      {/* <Link to="/write-new-stuff">ss</Link> */}
      <MenuBar />
    </div>
  );
};

export default MainList;

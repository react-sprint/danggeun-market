import React from 'react';
import getLocation from './actions';

const List = () => {
  getLocation();
  return (
    <>
      <h1>리스트</h1>
      <h1>리스트</h1>
      <h1>리스트</h1>
    </>
  );
};

export default List;

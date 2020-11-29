import React from 'react';
import styled from 'styled-components';
import BottomNavBar from '../components/common/BottomNavBar';

const GpsBlock = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 20px;
`;

const Gps = () => {
  return (
    <>
      <GpsBlock>성재님이 만드실 페이지입니다.</GpsBlock>
      <BottomNavBar />
    </>
  );
};

export default Gps;

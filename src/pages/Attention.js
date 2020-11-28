import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Danggeun } from '../styles/LoginStyle';
import BottomNavBar from '../components/common/BottomNavBar';

const AttentionBlock = styled.div`
  margin-top: 100px;
  width: 414px;
  text-align: center;
  font-size: 20px;
`;

const AttentionPage = () => {
  return (
    <>
      <Link to="/profile">돌아가기</Link>
      <AttentionBlock>관심상품 페이지입니다</AttentionBlock>
      <Danggeun />
      <BottomNavBar />
    </>
  );
};

export default AttentionPage;

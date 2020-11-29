import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuBar from '../components/common/MenuBar';
import { Danggeun } from '../styles/LoginStyle';

const SalePageBlock = styled.div`
  margin-top: 100px;
  width: 414px;
  text-align: center;
  font-size: 20px;
`;

const SalePage = () => {
  return (
    <>
      <Link to="/profile">돌아가기</Link>
      <SalePageBlock>판매상품 페이지입니다</SalePageBlock>
      <Danggeun />
      <MenuBar />
    </>
  );
};

export default SalePage;

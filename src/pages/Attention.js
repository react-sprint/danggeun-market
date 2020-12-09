import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AttentionBlock = styled.div`
  margin-top: 100px;
  width: 414px;
  text-align: center;
  font-size: 20px;
`;

const AttentionPage = () => (
  <>
    <Link to="/profile">돌아가기</Link>
    <AttentionBlock>관심상품 페이지입니다</AttentionBlock>
  </>
);

export default AttentionPage;

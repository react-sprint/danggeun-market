import React from 'react';
import styled from 'styled-components';
import { StyledUnderline } from './Header';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 379px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  color: white;
  background-color: #ff8a3d;
`;

const StyledSpan = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const StyledLongUnderline = styled(StyledUnderline)`
  width: 379px;
`;

const Body = () => (
  <StyledWrapper>
    <StyledButton>현재위치로 찾기</StyledButton>
    <StyledSpan>근처 동네</StyledSpan>
    <StyledLongUnderline />
  </StyledWrapper>
);

export default Body;

import React from 'react';
import styled from 'styled-components';
import getLocation from './actions';

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

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  font-size: 13px;
  font-weight: bold;
`;

const Body = () => {
  return (
    <StyledWrapper>
      <StyledButton>현재위치로 찾기</StyledButton>
      <StyledDiv>근처 동네</StyledDiv>
    </StyledWrapper>
  );
};

export default Body;

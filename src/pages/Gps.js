import React from 'react';
import styled from 'styled-components';
import Header from '../components/layout/neighborhood/Header';
import Body from '../components/layout/neighborhood/Body';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Gps = () => {
  return (
    <StyledWrapper>
      <Header />
      <Body />
    </StyledWrapper>
  );
};

export default Gps;

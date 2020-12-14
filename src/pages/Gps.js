import React from 'react';
import styled from 'styled-components';
import Header from '../components/neighborhood/Header';
import Body from '../components/neighborhood/Body';
import List from '../components/neighborhood/List';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gps = () => {
  return (
    <StyledWrapper>
      <Header />
      <Body />
      <List />
    </StyledWrapper>
  );
};

export default Gps;

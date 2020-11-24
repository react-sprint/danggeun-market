import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 414px;
  height: 736px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
`;

const Templates = () => (
  <StyledWrapper>
    <Header />
    <Body />
  </StyledWrapper>
);

export default Templates;

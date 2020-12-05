import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Header from '../components/neighborhood/Header';
import Body from '../components/neighborhood/Body';
import store from '../components/neighborhood/store';
import List from '../components/neighborhood/List';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Templates = () => {
  return (
    <StyledWrapper>
      <Header />
      <Provider store={store}>
        <Body />
      </Provider>
      <List />
    </StyledWrapper>
  );
};

export default Templates;

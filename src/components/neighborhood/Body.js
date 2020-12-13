import React from 'react';
import * as Styled from '../common/neighbor/Body';
import List from './List';

const Body = () => {
  return (
    <Styled.Wrapper>
      <Styled.Button>현재위치로 찾기</Styled.Button>
      <Styled.Span>근처 동네</Styled.Span>
      <List />
    </Styled.Wrapper>
  );
};

export default Body;

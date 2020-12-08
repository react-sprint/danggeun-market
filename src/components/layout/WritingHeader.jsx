import React from 'react';
import styled from 'styled-components';

import { Inner } from './Inner';
import HeaderTextAnchor from '../common/HeaderTextAnchor';

const HeaderWrap = styled.header`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #d7d7d7;
`;

const Container = styled(Inner)`
  display: flex;
`;

function WritingHeader() {
  return (
    <HeaderWrap>
      <Container>
        <HeaderTextAnchor href="/" text="닫기" />
      </Container>
    </HeaderWrap>
  );
}

export default WritingHeader;

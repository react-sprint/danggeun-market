import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AnchorWrap = styled.div`
  display: block;
`;

function HeaderTextAnchor({ href, text }) {
  return (
    <AnchorWrap>
      <Link to={href}>{text}</Link>
    </AnchorWrap>
  );
}

export default HeaderTextAnchor;

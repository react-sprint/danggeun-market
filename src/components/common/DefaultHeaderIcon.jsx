import React from 'react';
import styled from 'styled-components';

const DefaultIcon = styled.div`
  display: block;
`;

const DefaultBtn = styled.button`
  width: 23px;
  height: 23px;
  padding: 5px;
  box-sizing: content-box;
`;

function DefaultHeaderIcon({ icoLink }) {
  return (
    <DefaultIcon>
      <DefaultBtn>
        <img src={icoLink} alt="icon" />
      </DefaultBtn>
    </DefaultIcon>
  );
}

export default DefaultHeaderIcon;

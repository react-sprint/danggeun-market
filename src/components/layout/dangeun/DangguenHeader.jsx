import React from 'react';
import styled from 'styled-components';
import { DefaultHeaderTitle } from '../../common/DefaultHeaderTitle';
import { DefaultHeaderWrap } from '../../common/DefaultHeaderWrap';
import { Inner } from '../Inner';
import settingIcon from '../../../images/ico/ico_setting.png';

const HeaderInner = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrap = styled.div`
  display: block;
`;

const IconBtn = styled.button`
  width: 29px;
  height: 29px;
  background: url(${settingIcon}) center center/contain no-repeat;
`;

function DangguenHeader() {
  return (
    <DefaultHeaderWrap>
      <HeaderInner>
        <DefaultHeaderTitle>나의 당근</DefaultHeaderTitle>
        <IconWrap>
          <IconBtn type="button" />
        </IconWrap>
      </HeaderInner>
    </DefaultHeaderWrap>
  );
}

export default DangguenHeader;

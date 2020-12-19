import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DefaultHeaderWrap } from '../../common/DefaultHeaderWrap';
import { Inner } from '../Inner';
import { ReactComponent as ArrowBlack } from '../../../icon/arrow_back_black.svg';
import { BackArrow } from '../../common/BackArrow';
import { DefaultHeaderTitle } from '../../common/DefaultHeaderTitle';
import { EndText } from '../ProfileEditStyle';

const HeaderInner = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackLink = styled(BackArrow)`
  margin: 0 24px 0 4px;
  & svg {
    fill: black;
  }
`;
function ProfileEditHeader({ onChangeName, tempName }) {
  return (
    <DefaultHeaderWrap>
      <HeaderInner>
        <BackLink>
          <Link to="profile">
            <ArrowBlack />
          </Link>
        </BackLink>
        <DefaultHeaderTitle>프로필 수정</DefaultHeaderTitle>
        <Link to="profile" style={{padding: '10px 0 10px 10px'}}>
          <EndText onClick={() => onChangeName(tempName)}>완료</EndText>
        </Link>
      </HeaderInner>
    </DefaultHeaderWrap>
  );
}

export default ProfileEditHeader;

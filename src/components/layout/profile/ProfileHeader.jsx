import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { DefaultHeaderTitle } from '../../common/DefaultHeaderTitle';
import { DefaultHeaderWrap } from '../../common/DefaultHeaderWrap';
import { Inner } from '../Inner';
import { ReactComponent as ArrowBlack } from '../../../icon/arrow_back_black.svg';
import { BackArrow } from '../../common/BackArrow';
import { MenuBlock } from './ProfileStyle';

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

function ProfileHeader() {
  const history = useHistory();
  return (
    <DefaultHeaderWrap>
      <HeaderInner>
        <BackLink>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              history.goBack();
            }}
          >
            <ArrowBlack />
          </Link>
        </BackLink>
        <DefaultHeaderTitle>프로필</DefaultHeaderTitle>
        <Link to="/profileedit">
          <MenuBlock />
        </Link>
      </HeaderInner>
    </DefaultHeaderWrap>
  );
}

export default ProfileHeader;

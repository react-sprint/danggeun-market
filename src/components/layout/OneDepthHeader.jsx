import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Inner } from './Inner';
import { ReactComponent as ArrowWhite } from '../../icon/arrow_back_white.svg';
import moreWhite from '../../images/ico/ico_more_white.png';
import moreBlack from '../../images/ico/ico_more_dark.png';
import { BackArrow } from '../common/BackArrow';
import { DepthHeader } from '../common/DepthHeader';

const DepthInHeader = styled(DepthHeader)`
  ${({ status }) => {
    return status && 'background-color:white; border-bottom:1px solid #d7d7d7;';
  }};
`;

const DepthInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
`;

const BackLink = styled(BackArrow)`
  & svg {
    ${({ status }) => (status ? 'fill:black' : 'fill:white')}
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

const MoreDot = styled.div`
  img {
    height: 20px;
  }
`;

function OneDepthHeader({ trigger }) {
  const history = useHistory();
  return (
    <DepthInHeader status={trigger}>
      <DepthInner>
        <BackLink status={trigger}>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              history.goBack();
            }}
          >
            <ArrowWhite />
          </Link>
        </BackLink>
        <RightMenu>
          <MoreDot>
            <img src={trigger ? moreBlack : moreWhite} alt="moredot" />
          </MoreDot>
        </RightMenu>
      </DepthInner>
    </DepthInHeader>
  );
}

export default OneDepthHeader;

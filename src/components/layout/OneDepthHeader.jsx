import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Inner } from './Inner';
import { ReactComponent as ArrowWhite } from '../../icon/arrow_back_white.svg';
import moreWhite from '../../images/ico/ico_more_white.png';
import moreBlack from '../../images/ico/ico_more_dark.png';

const DepthHeader = styled.header`
  position: fixed;
  align-items: center;
  width: 100%;
  height: 55px;
  ${({ status }) => {
    return status && 'background-color:white; border-bottom:2px solid #d7d7d7;';
  }};
  z-index: 2;
`;

const DepthInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
`;

const BackLink = styled.div`
  display: block;

  & svg {
    height: 55px;
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

function OneDepthHeader() {
  const [headerOn, setHeaderOn] = useState(false); //
  return (
    <DepthHeader status={headerOn}>
      <DepthInner>
        <BackLink status={headerOn}>
          <Link to="/">
            <ArrowWhite />
          </Link>
        </BackLink>
        <RightMenu>
          <MoreDot>
            <img src={headerOn ? moreBlack : moreWhite} alt="moredot" />
          </MoreDot>
        </RightMenu>
      </DepthInner>
    </DepthHeader>
  );
}

export default OneDepthHeader;

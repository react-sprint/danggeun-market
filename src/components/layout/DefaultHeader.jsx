import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DefaultHeaderTitle } from '../common/DefaultHeaderTitle';
import DefaultHeaderIcon from '../common/DefaultHeaderIcon';
import { Inner } from './Inner';
import search from '../../images/ico/ico_search.png';
import filter from '../../images/ico/ico_category_filter.png';
import notice from '../../images/ico/ico_notification_outline_18.png';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #d7d7d7;
  background-color: #fff;
  z-index: 1;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  & div:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
`;

function DefaultHeader() {
  return (
    <Header>
      <HeaderInner>
        <DefaultHeaderTitle>정자동</DefaultHeaderTitle>
        <IconWrap>
          <DefaultHeaderIcon icoLink={search} />
          <Link to="/filter">
            <DefaultHeaderIcon icoLink={filter}  />
          </Link>
          <DefaultHeaderIcon icoLink={notice} />
        </IconWrap>
      </HeaderInner>
    </Header>
  );
}

export default DefaultHeader;

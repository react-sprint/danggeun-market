import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Inner } from '../components/layout/Inner';
import { BackArrow } from '../components/common/BackArrow';
import { ReactComponent as ArrowBlack } from '../icon/arrow_back_black.svg';
import SaleHeader from '../components/layout/sale/SaleHeader';
import useCallList from '../utils/hooks/useCallList';

const SaleWrap = styled.div`
  display: block;
`;

const DepthInner = styled(Inner)`
  padding-top: 114px;
  min-height: calc(100vh - 114px);
`;

const SalePage = () => {
  const stuff = useSelector(({ stuffs }) => stuffs.data);
  const user = useSelector(({ user }) => user);
  console.log(user);
  const history = useHistory();

  const [tab, setTab] = useState(1);
  const onClick = (id) => {
    setTab(id);
  };

  useCallList();

  return (
    <SaleWrap>
      <SaleHeader history={history} tab={tab} onClick={onClick} />
      <DepthInner>{}</DepthInner>
    </SaleWrap>
  );
};

export default SalePage;

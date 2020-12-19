/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from '../components/common/neighbor/Icon';
import * as Line from '../components/common/neighbor/Line';
import * as Button from '../components/common/filter/Button';
import * as Body from '../components/common/filter/Body';
import * as Header from '../components/common/filter/Header';
import { checkFilter } from '../modules/filter';

import filterArray from '../utils/filterArray';

const FilterIcon = ({ status }) => {
  if (status) {
    return <Icon.FilterOn />;
  }
  return <Icon.FilterOff />;
};

const FilterList = () => {
  const status = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onCheckFilter = (filter) => dispatch(checkFilter(filter));

  return (
    <>
      {filterArray.map((filter, id) => (
        <Button.Check key={id} value={filter.value} onClick={() => onCheckFilter(filter.value)}>
          <FilterIcon status={status[filter.value]} />
          <Body.Text>{filter.text}</Body.Text>
        </Button.Check>
      ))}
    </>
  );
};

const Filter = () => {
  return (
    <>
      <Body.Frame>
        <Header.Wrapper>
          <Link to="/">
            <Icon.ArrowBack />
          </Link>
          <Header.TextBold>관심 카테고리 설정</Header.TextBold>
          <Body.Dummy />
        </Header.Wrapper>
        <Line.Border />
        <Body.Wrapper>
          <Body.TextBox>
            <Body.TextBold>홈 화면에서 보고 싶지 않은 카테고리는 체크를 해제하세요.</Body.TextBold>
            <Body.TextLight>최소 1개 이상 선택되어 있어야 합니다.</Body.TextLight>
          </Body.TextBox>
          <Body.CheckList>
            <FilterList />
          </Body.CheckList>
        </Body.Wrapper>
      </Body.Frame>
    </>
  );
};

export default Filter;

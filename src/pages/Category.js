import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useCallList from '../utils/hooks/useCallList';
import { Inner } from '../components/layout/Inner';
import StuffList from '../components/layout/write/StuffList';
import * as Header from '../components/common/category/Header';
import * as Body from '../components/common/category/Body';
import * as Icon from '../components/common/neighbor/Icon';
import categoryArray from '../utils/filterArray';

const Category = ({ match }) => {
  const { category } = match.params;

  const stuff = useSelector((state) => state.stuffs.data);
  useCallList();

  const result = stuff?.filter((list) => list.category === category);

  const IsEmpty = ({ result }) => {
    if (result.length === 0) {
      return (
        <Body.Article>
          <Header.TextLight>카테고리에 해당하는 상품이 없습니다.</Header.TextLight>
        </Body.Article>
      );
    }
    return (
      <Inner>
        <StuffList data={result} category />
      </Inner>
    );
  };

  return (
    <Body.Frame>
      <Header.Wrapper>
        <Header.Inner>
          <Link to="/search">
            <Icon.ArrowBack />
          </Link>
          <Header.TextBold>{categoryArray[category - 1].text}</Header.TextBold>
          <Header.Dummy />
        </Header.Inner>
      </Header.Wrapper>
      <IsEmpty result={result} />
    </Body.Frame>
  );
};

export default Category;

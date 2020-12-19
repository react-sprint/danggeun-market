/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import categoryArray from '../utils/filterArray';
import * as Body from '../components/common/search/Body';
import * as Header from '../components/common/search/Header';
import * as Icon from '../components/common/neighbor/Icon';
import * as Line from '../components/common/neighbor/Line';
import Monitor from '../images/ico/monitor.png';
import Chair from '../images/ico/chair.png';
import Pot from '../images/ico/pot.png';
import Lego from '../images/ico/lego.png';
import Tube from '../images/ico/tube.png';
import Speaker from '../images/ico/speaker.png';

const CategoryList = () => {
  const ImgArray = [Monitor, Chair, Pot, Lego, Tube, Speaker];

  return (
    <>
      {categoryArray.map((category, id) => (
        <Body.ButtonBox key={id}>
          <Body.LinkWrapper>
            <Body.LinkBox to={`/category/${category.id}`}>
              <Body.CategoryIcon category={ImgArray[id]} />
              <Body.TextLight key={id}>{category.text}</Body.TextLight>
            </Body.LinkBox>
          </Body.LinkWrapper>
        </Body.ButtonBox>
      ))}
    </>
  );
};

const Search = () => {
  return (
    <Body.Frame>
      <Header.Wrapper>
        <Link to="/">
          <Icon.ArrowBack />
        </Link>
        <Header.SearchBarBox>
          <Header.SearchBarInner>
            <Icon.Search />
            <Header.Input placeholder="검색어를 입력하세요." />
          </Header.SearchBarInner>
          <Header.Dummy />
        </Header.SearchBarBox>
      </Header.Wrapper>
      <Line.Border />
      <Body.Wrapper>
        <Body.TextBox>
          <Body.TextBold>카테고리</Body.TextBold>
        </Body.TextBox>
        <Body.CategoryBox>
          <CategoryList />
        </Body.CategoryBox>
      </Body.Wrapper>
    </Body.Frame>
  );
};

export default Search;

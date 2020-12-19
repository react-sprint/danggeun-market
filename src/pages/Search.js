/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const [input, setInput] = useState('empty');

  const OnType = (e) => {
    if (e.target.value.trim() !== '') {
      setInput(e.target.value);
    }
  };

  const history = useHistory();
  const SearchResult = () => history.push('/searchresult', input);

  const OnSearch = (e) => {
    if (e.key === 'Enter' && input === 'empty') {
      alert('검색어를 입력해주세요');
    } else if (e.key === 'Enter' && input.length < 2) {
      alert('두 글자 이상 입력해 주세요');
    } else if (e.key === 'Enter' && input.length >= 2) {
      SearchResult();
    }
  };

  return (
    <Body.Frame>
      <Header.Wrapper>
        <Link to="/">
          <Icon.ArrowBack />
        </Link>
        <Header.SearchBarBox>
          <Header.SearchBarInner>
            <Icon.Search />
            <Header.Input placeholder="검색어를 입력 후 Enter를 누르세요" onChange={OnType} onKeyPress={OnSearch} />
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

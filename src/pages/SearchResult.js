import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useCallList from '../utils/hooks/useCallList';
import { Inner } from '../components/layout/Inner';
import StuffList from '../components/layout/write/StuffList';
import * as Header from '../components/common/category/Header';
import * as Body from '../components/common/category/Body';
import * as Icon from '../components/common/neighbor/Icon';

const SearchResult = (params) => {
  const keyword = params.location.state;

  const stuff = useSelector((state) => state.stuffs.data);
  useCallList();

  const result = stuff?.filter((list) => list.input.title.match(keyword));

  const IsEmpty = ({ result }) => {
    if (result.length === 0) {
      return (
        <Body.Article>
          <Header.TextLight>{`검색하신 "${keyword}"에 해당하는 상품이 없습니다.`}</Header.TextLight>
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
          <Header.TextBold>{`"${keyword}" 검색결과`}</Header.TextBold>
          <Header.Dummy />
        </Header.Inner>
      </Header.Wrapper>
      <IsEmpty result={result} />
    </Body.Frame>
  );
};

export default SearchResult;

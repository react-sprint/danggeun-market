import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';
import { Inner } from '../components/layout/Inner';
import WriteSwiper from '../components/layout/write/WriteSwiper';
import OneDepthHeader from '../components/layout/OneDepthHeader';
import DetailUserData from '../components/layout/write/DetailUserData';
import DetailContents from '../components/layout/write/DetailContents';
import { categoryList } from '../components/layout/write/commonFunc';
import OneDepthFooter from '../components/layout/write/OneDepthFooter';
import useCallList from '../utils/hooks/useCallList';
import DetailSale from '../components/layout/write/DetailSale';

function StuffDetail() {
  const history = useHistory();
  const { search } = history.location;
  const query = queryString.parse(search);
  const { contents, creatorId, category, price, title, token, time, thumb0, region } = query;

  let withoutToken = [];
  Object.entries(query).forEach(([key]) => {
    if (key.match('thumb') !== null) {
      withoutToken.push(query[key.match('thumb')?.input]);
    }
  });

  let stuffCarousel = [];
  let getToken = [];

  const parseToken = (tokenEl, idx, linkData) => {
    // 토큰과 파싱된 이미지url 결합
    // eslint-disable-next-line no-unused-expressions
    const pureLink = `${linkData ? linkData[idx] : thumb0}&token=${tokenEl}`;
    const storageLink = 'https://firebasestorage.googleapis.com/v0/b/dangguen-market.appspot.com/o/';
    const link = pureLink.replace(storageLink, '');
    const parseLink = link.replace('/', '%2F');
    const compeleteLink = storageLink + parseLink;
    stuffCarousel.push(compeleteLink);
  };

  if (token) {
    if (typeof token !== 'string') {
      // 이미지가 단일 토큰인경우
      token.map((tokenEl, idx) => parseToken(tokenEl, idx, withoutToken));
    } else {
      // 다중토큰인경우
      getToken.push(token);
      getToken.map((tokenEl, idx) => parseToken(tokenEl, idx));
    }
  }

  const categoryItem = categoryList();
  const categoryName = categoryItem[category - 1].listName;

  useCallList();

  const StuffDetailWrap = styled.div`
    position: relative;
  `;

  return (
    <StuffDetailWrap>
      <OneDepthHeader />
      <WriteSwiper carouselImg={stuffCarousel} />
      <Inner>
        <DetailUserData username={creatorId} region={region} />
        <DetailContents title={title} contents={contents} category={categoryName} time={time} />
        <DetailSale username={creatorId} />
      </Inner>
      <OneDepthFooter price={price} />
    </StuffDetailWrap>
  );
}

export default StuffDetail;

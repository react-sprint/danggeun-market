import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { Inner } from '../components/layout/Inner';
import WriteSwiper from '../components/layout/write/WriteSwiper';
import OneDepthHeader from '../components/layout/OneDepthHeader';
import DetailUserData from '../components/layout/write/DetailUserData';

function StuffDetail() {
  const history = useHistory();
  const { search } = history.location;
  const query = queryString.parse(search);

  const { contents, creatorId, price, title, token, thumb0 } = query;

  let withoutToken = [];
  Object.entries(query).forEach(([key]) => {
    if (key.match('thumb') !== null) {
      withoutToken.push(query[key.match('thumb')?.input]);
    }
  });

  const parseToken = (tokenEl, idx, linkData) => {
    // eslint-disable-next-line no-unused-expressions
    const pureLink = `${linkData ? linkData[idx] : thumb0}&token=${tokenEl}`;
    const storageLink =
      'https://firebasestorage.googleapis.com/v0/b/dangguen-market.appspot.com/o/';
    const link = pureLink.replace(storageLink, '');
    const parseLink = link.replace('/', '%2F');
    const compeleteLink = storageLink + parseLink;
    stuffCarousel.push(compeleteLink);
  };

  let stuffCarousel = [];
  let getToken = [];
  if (typeof token !== 'string') {
    token.map((tokenEl, idx) => parseToken(tokenEl, idx, withoutToken));
  } else {
    getToken.push(token);
    getToken.map((tokenEl, idx) => parseToken(tokenEl, idx));
  }

  return (
    <div>
      <OneDepthHeader />
      <WriteSwiper carouselImg={stuffCarousel} />
      <Inner>
        <DetailUserData username={creatorId} />
        <div>컨텐츠</div>
      </Inner>
    </div>
  );
}

export default StuffDetail;

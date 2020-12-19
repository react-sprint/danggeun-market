import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import styled from 'styled-components';
import { Inner } from '../components/layout/Inner';
import WriteSwiper from '../components/layout/write/WriteSwiper';
import OneDepthHeader from '../components/layout/OneDepthHeader';
import DetailUserData from '../components/layout/write/DetailUserData';
import DetailContents from '../components/layout/write/DetailContents';
import OneDepthFooter from '../components/layout/write/OneDepthFooter';
import useCallList from '../utils/hooks/useCallList';
import DetailSale from '../components/layout/write/DetailSale';

const StuffDetailWrap = styled.div`
  position: relative;
`;

function StuffDetail() {
  const [trigger, setTrigger] = useState(false);
  const stuffs = useSelector((state) => state.stuffs.data);
  const detailHead = useRef(null);

  const history = useHistory();
  const { search } = history.location;
  const query = queryString.parse(search);
  const { no } = query;

  useCallList();

  const toggleNav = () => {
    const scrollValue = window.scrollY;
    const userData = detailHead.current?.offsetTop;
    if (scrollValue >= userData) setTrigger(true);
    else setTrigger(false);
  };

  const scrollTrigger = () => {
    window.addEventListener('scroll', toggleNav);
    return () => window.removeEventListener('scroll', toggleNav);
  };

  useEffect(() => scrollTrigger(), [scrollTrigger]);

  return (
    <>
      {stuffs
        ?.filter((currentItem) => currentItem.id === no)
        .map((stuffItem) => {
          const { id, attachmentUrl, creatorId, region, category, input, createAt } = stuffItem;
          const { title, contents, price } = input;
          return (
            <StuffDetailWrap key={id}>
              <OneDepthHeader trigger={trigger} />
              <WriteSwiper carouselImg={attachmentUrl} />
              <Inner>
                <DetailUserData username={creatorId} region={region} ref={detailHead} />
                <DetailContents title={title} contents={contents} category={category} time={createAt} />
                <DetailSale username={creatorId} stuff={stuffs} />
              </Inner>
              <OneDepthFooter price={price} />
            </StuffDetailWrap>
          );
        })}
    </>
  );
}

export default StuffDetail;

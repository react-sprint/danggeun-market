import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StuffContentWrap = styled.li`
  border-bottom: 1px solid #d7d7d7;

  & a {
    display: flex;
    width: 100%;
    padding: 18px 0;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 32%;
  max-height: 200px;

  &::after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: url(${({ thumb }) => thumb}) center center/cover no-repeat;
  }
`;

const StuffContent = styled.div`
  position: relative;
  width: 64%;
  margin-left: 4%;

  & strong {
    display: block;
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }
`;

const DateLocation = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 0.75rem;
  color: #aaa;
`;

const PriceTag = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 1rem;
  font-weight: 700;
  color: #333;
`;

function Stuff({ thumb, matter, time, creatorId, category, region }) {
  const { price, title } = matter;

  const returnTime = () => {
    const rightNow = Date.now();
    const gap = rightNow - time;
    const gapSecond = Math.floor(gap / 1000);
    const gapMinute = Math.floor(gapSecond / 60);
    const gapHour = Math.floor(gapMinute / 60);
    const gapDay = Math.floor(gapHour / 24);

    if (gapSecond < 60) return `${gapSecond}초`;
    if (gapMinute < 60) return `${gapMinute}분`;
    if (gapHour < 24) return `${gapHour}시간`;
    return `${gapDay}일`;
  };

  let queryElement = { ...matter, creatorId, category, time: returnTime(), region };

  if (typeof thumb === 'object') {
    thumb?.map((img, idx) => {
      const keyName = (idx) => `thumb${idx}`;
      queryElement = { ...queryElement, [keyName(idx)]: img };
      return queryElement;
    });
  } else
    queryElement = {
      ...matter,
      creatorId,
      category,
      time: returnTime(),
      thumb0: thumb,
    };

  const queryMatter = Object.entries(queryElement)
    .map((e) => e.join('='))
    .join('&');

  return (
    <StuffContentWrap>
      <Link to={{ pathname: '/stuff-detail', search: queryMatter }}>
        <Thumbnail thumb={thumb}>
          <div />
        </Thumbnail>
        <StuffContent>
          <strong>{title}</strong>
          <DateLocation>
            {region || '행복동'} · {returnTime()} 전
          </DateLocation>
          <PriceTag>{price && `${price}원`}</PriceTag>
        </StuffContent>
      </Link>
    </StuffContentWrap>
  );
}

export default Stuff;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { returnTime } from '../../layout/write/commonFunc';

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

function Stuff({ thumb, matter, time, no, region }) {
  const { price, title } = matter;
  const queryElement = { no };
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
            {region || '행복동'} · {returnTime(time)} 전
          </DateLocation>
          <PriceTag>{price && `${price}원`}</PriceTag>
        </StuffContent>
      </Link>
    </StuffContentWrap>
  );
}

export default Stuff;

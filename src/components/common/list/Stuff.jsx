import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { returnTime } from '../../layout/write/commonFunc';
import { Thumbnail } from './Thumbnail';
import { StuffContents } from './StuffContents';
import { DateLocation } from './DateLocation';
import { PriceTag } from './PriceTag';

const StuffContentWrap = styled.li`
  border-bottom: 1px solid #d7d7d7;

  & a {
    display: flex;
    width: 100%;
    padding: 18px 0;
  }
`;

const StuffContent = styled(StuffContents)`
  & strong {
    display: block;
    font-size: 1.0625rem;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
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

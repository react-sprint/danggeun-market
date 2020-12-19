import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DateLocation } from '../../common/list/DateLocation';
import { PriceTag } from '../../common/list/PriceTag';
import { StuffContents } from '../../common/list/StuffContents';
import { returnTime } from '../write/commonFunc';
import more from '../../../images/ico/ico_more.png';
import { dbService } from '../../../utils/api/fbInstance';

const StuffContentWrap = styled.div`
  display: flex;
  padding: 15px 0;
  a {
    display: block;
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
  }
`;

const StuffTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StuffTitle = styled.strong`
  display: block;
  width: 80%;
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;

const StuffBtn = styled.button`
  width: 20%;
  height: 25px;
  background: url(${more}) center center/contain no-repeat;
  outline: none;
`;

const MoreBtnWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 50px;
  overflow: hidden;
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
`;

const MoreBtn = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  border: 1px solid #d7d7d7;

  font-size: 14px;
  font-weight: 700;
  color: #666;
  background-color: #efefef;
`;

function SaleStuff({ thumb, matter, time, no, region, creatorId }) {
  const [toggle, setToggle] = useState(false);
  const { price, title } = matter;
  const queryElement = { no };
  const queryMatter = Object.entries(queryElement)
    .map((e) => e.join('='))
    .join('&');

  const onDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    const del = confirm('정말로 이 상품을 삭제하시겠습니까?');
    if (del) {
      await dbService.doc(`stuffList/${no}`).delete();
    }
  };
  return (
    <StuffContentWrap thumb={thumb}>
      <Link to={{ pathname: '/stuff-detail', search: queryMatter }}>
        <div />
      </Link>
      <StuffContents>
        <StuffTopWrap>
          <StuffTitle>{title}</StuffTitle>
          <StuffBtn onClick={() => setToggle((state) => !state)}>{}</StuffBtn>
        </StuffTopWrap>
        <DateLocation>
          {region || '행복동'} · {returnTime(time)} 전
        </DateLocation>
        <PriceTag>{price && `${price}원`}</PriceTag>
        <MoreBtnWrap toggle={toggle}>
          <MoreBtn>수정</MoreBtn>
          <MoreBtn onClick={onDelete}>삭제</MoreBtn>
        </MoreBtnWrap>
      </StuffContents>
    </StuffContentWrap>
  );
}

export default SaleStuff;

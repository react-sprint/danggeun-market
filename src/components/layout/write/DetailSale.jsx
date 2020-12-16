import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SaleWrap = styled.div`
  padding-bottom: 120px;
`;
const SaleTop = styled.div``;
const SaleTitle = styled.strong``;
const SaleLink = styled.div``;
const SaleList = styled.ul``;
const SaleItem = styled.li``;
const SaleImgBx = styled.div``;
const SaleStuffName = styled.span``;
const SaleStuffPrice = styled.span``;

function DetailSale({ username }) {
  const stuff = useSelector((state) => state.stuffs.data);
  const filteringStuff = stuff.filter((saleItem) => saleItem.creatorId === username);
  console.log(filteringStuff);
  return (
    <SaleWrap>
      <SaleTop>
        <SaleTitle>{username}님의 판매 상품</SaleTitle>
        <SaleLink>
          <Link to="/">더 보기</Link>
        </SaleLink>
      </SaleTop>
      <SaleList>
        {filteringStuff.map((filterItem) => {
          const { id, input, attachmentUrl } = filterItem;
          const { title, price } = input;
          return (
            <SaleItem key={id}>
              <SaleImgBx attachmentUrl={attachmentUrl} />
              <SaleStuffName>{title}</SaleStuffName>
              <SaleStuffPrice>{price}</SaleStuffPrice>
            </SaleItem>
          );
        })}
      </SaleList>
    </SaleWrap>
  );
}

export default DetailSale;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SaleWrap = styled.div`
  padding: 25px 0 120px;
`;
const SaleTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SaleTitle = styled.strong`
  font-size: 1.06rem;
  font-weight: 500;
  color: #000;
`;
const SaleLink = styled.div`
  font-size: 1.06rem;
  font-weight: 500;
  color: #888;
`;
const SaleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SaleItem = styled.li`
  padding-top: 25px;
  width: calc(50% - 15px);
`;
const SaleImgBx = styled.div`
  ${({ attachmentUrl }) => attachmentUrl && `background:url(${attachmentUrl[0]}) center center/cover no-repeat;`}
  height:135px;
  border-radius: 10px;
`;
const SaleStuffName = styled.span`
  display: block;
  padding-top: 15px;
  font-size: 0.93rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;
const SaleStuffPrice = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  color: #222;
`;

function DetailSale({ username, stuff }) {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (stuff) {
      const filteringArr = stuff.filter((saleItem) => saleItem.creatorId === username);
      const previewArr = filteringArr.slice(0, 4);
      setFilter(previewArr);
    }
  }, []);

  return (
    <SaleWrap>
      <SaleTop>
        <SaleTitle>{username}님의 판매 상품</SaleTitle>
        <SaleLink>
          <Link to="/">더 보기</Link>
        </SaleLink>
      </SaleTop>
      <SaleList>
        {filter.map((filterItem, idx) => {
          const { id, input, attachmentUrl } = filterItem;
          const { title, price } = input;
          if (idx > 4) return;
          // eslint-disable-next-line consistent-return
          return (
            <SaleItem key={id}>
              <Link
                to={`/stuff-detail?no=${id}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <SaleImgBx attachmentUrl={attachmentUrl} />
                <SaleStuffName>{title}</SaleStuffName>
                <SaleStuffPrice>{price}원</SaleStuffPrice>
              </Link>
            </SaleItem>
          );
        })}
      </SaleList>
    </SaleWrap>
  );
}

export default React.memo(DetailSale);

import React from 'react';
import styled from 'styled-components';

const SaleBtnWrap = styled.ul`
  display: flex;
`;

const SaleBtnItem = styled.li`
  flex-basis: 50%;
  border: 1px solid #d7d7d7;
  &:first-of-type {
    border-right: 0;
  }
`;

const SaleBtn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 0.81rem;
  font-weight: 700;
  background-color: #fff;
`;

function SaleBtnList() {
  return (
    <SaleBtnWrap>
      <SaleBtnItem>
        <SaleBtn>예약중으로 변경</SaleBtn>
      </SaleBtnItem>
      <SaleBtnItem>
        <SaleBtn>거래 완료</SaleBtn>
      </SaleBtnItem>
    </SaleBtnWrap>
  );
}

export default SaleBtnList;

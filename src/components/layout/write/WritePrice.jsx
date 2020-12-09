import React from 'react';
import styled from 'styled-components';
import { WriteInputWrap } from './WriteInputWrap';
import { WriteInput } from '../../common/WriteInput';

const PriceWrap = styled(WriteInputWrap)`
  display: flex;
`;

const PriceShape = styled.span`
  color: ${({ price }) => (price === '' ? '#aaa' : '#202020')};
`;

const PriceInput = styled(WriteInput)`
  width: 200px;
`;

function WritePrice({ onChange, price }) {
  return (
    <PriceWrap>
      <PriceShape price={price}>￦</PriceShape>
      <PriceInput
        type="text"
        name="price"
        onChange={onChange}
        value={price}
        placeholder="가격 입력 (선택사항)"
      />
    </PriceWrap>
  );
}

export default WritePrice;

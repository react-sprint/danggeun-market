import React from 'react';
import styled from 'styled-components';
import { WriteInputWrap } from './WriteInputWrap';

const WriteArea = styled.textarea`
  width: 100%;
  height: 5em;
  border: 0;
  font-size: 18px;
  outline: none;
`;

function WriteContents({ onChange, contents }) {
  return (
    <WriteInputWrap>
      <WriteArea
        type="text"
        name="contents"
        placeholder="브랜드, 사이즈, 색상, 소재 등 물품에 대한 자세한 정보를 작성하면 구매자에게 도움이 돼요."
        onChange={onChange}
        value={contents}
        required
      />
    </WriteInputWrap>
  );
}

export default WriteContents;

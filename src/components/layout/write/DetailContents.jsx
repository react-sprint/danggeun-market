import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  padding-top: 38px;
  border-bottom: 1px solid #f0f0f0;
`;

const ContentsTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
`;

const ContentsInfo = styled.div`
  font-size: 0.875rem;
  color: #aaa;
  padding: 23px 0;
`;
const ContentsTxt = styled.p``;

function DetailContents({ title, contents, category, time }) {
  return (
    <ContentsWrap>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsInfo>
        <span>
          {category} · {time}전
        </span>
      </ContentsInfo>
      <ContentsTxt>{contents}</ContentsTxt>
      <ContentsInfo>
        <span>관심 3 · 조회 111</span>
      </ContentsInfo>
    </ContentsWrap>
  );
}

export default DetailContents;

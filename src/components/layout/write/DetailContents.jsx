import React from 'react';
import styled from 'styled-components';
import { categoryList, returnTime } from './commonFunc';

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
  const categoryFilter = categoryList();
  const categoryName = categoryFilter.filter((list) => list.id === Number(category));
  const [categoryItem] = categoryName;
  const { listName } = categoryItem;
  return (
    <ContentsWrap>
      <ContentsTitle>{title || '임시'}</ContentsTitle>
      <ContentsInfo>
        <span>
          {listName} · {returnTime(time)}전
        </span>
      </ContentsInfo>
      <ContentsTxt>{contents}</ContentsTxt>
      <ContentsInfo>
        <span>관심 3 · 조회 111</span>
      </ContentsInfo>
    </ContentsWrap>
  );
}

export default React.memo(DetailContents);

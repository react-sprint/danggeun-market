import React from 'react';
import { Inner } from '../components/layout/Inner';
import WriteSwiper from '../components/layout/write/WriteSwiper';

function StuffDetail() {
  return (
    <div>
      <WriteSwiper />
      <Inner>
        <div>로그인정보</div>
        <div>컨텐츠</div>
      </Inner>
    </div>
  );
}

export default StuffDetail;

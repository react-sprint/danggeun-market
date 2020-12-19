import React from 'react';
import { WriteInputWrap } from './WriteInputWrap';
import { WriteInput } from '../../common/WriteInput';

function StuffTitle({ onChange, title }) {
  return (
    <WriteInputWrap>
      <WriteInput
        type="text"
        name="title"
        placeholder="글 제목"
        onChange={onChange}
        value={title}
        required
      />
    </WriteInputWrap>
  );
}

export default StuffTitle;

import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../icon/close_white.svg';

const Preview = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  margin-left: 20px;
  border-radius: 5px;
  background: url(${({ attachment }) => attachment}) center center/cover no-repeat;
`;

const DeletePreview = styled.button`
  position: absolute;
  top: -9px;
  right: -9px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }

  & svg {
    position: relative;
    width: 13px;
    margin-top: 1px;
  }
`;

function PhotoPreview({ attachment, onClearPhoto, no }) {
  return (
    <Preview attachment={attachment}>
      <DeletePreview type="button" onClick={() => onClearPhoto(no)}>
        <CloseIcon />
      </DeletePreview>
    </Preview>
  );
}

export default PhotoPreview;

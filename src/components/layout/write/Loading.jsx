import React from 'react';
import styled from 'styled-components';
import loadIcon from '../../../images/ico/ico_spinner_white.png';

const LoadWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const LoadBlack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`;

const LoadIconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%) rotate(0deg);
  animation-name: rotate;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  img {
    width: 100%;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

function Loading() {
  return (
    <LoadWrap>
      <LoadBlack />
      <LoadIconWrap>
        <img src={loadIcon} alt="loading" />
      </LoadIconWrap>
    </LoadWrap>
  );
}

export default Loading;

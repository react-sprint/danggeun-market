import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import writeIcon from '../../../images/ico/ico_post.png';

const PlusWrap = styled.div`
  position: fixed;
  bottom: 75px;
  right: 18px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: ${({ toggle }) => (toggle ? '#FFF' : '#fd8b3c')};
  cursor: pointer;
  transition: ease-in-out 0.3s all;
  transform: ${({ toggle }) => (toggle ? 'rotate(0deg)' : 'rotate(-45deg)')};
  z-index: 15;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 10px;
    background-color: ${({ toggle }) => (toggle ? '#fd8b3c' : '#FFF')};
  }

  &::before {
    width: 4px;
    height: 25px;
  }

  &::after {
    width: 25px;
    height: 4px;
  }
`;

const OverLab = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
`;

const LinkBtn = styled.div`
  position: fixed;
  bottom: 155px;
  right: 6px;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: #fd8b3c;
  display: ${({ toggle }) => (toggle ? 'block' : 'none')};
  transform: translateX(-50%);
  animation-name: rise;
  animation-timing-function: linear;
  animation-duration: 0.3s;
  z-index: 13;

  & a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(${writeIcon}) 53% 45%/40% no-repeat;
  }

  @keyframes rise {
    0% {
      bottom: 75px;
    }
    100% {
      bottom: 155px;
    }
  }
`;

function WritePlus() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle((state) => !state);

  return (
    <>
      <PlusWrap onClick={onToggle} toggle={toggle} />
      <LinkBtn toggle={toggle}>
        <Link to="/write-new-stuff">{}</Link>
      </LinkBtn>
      {toggle && <OverLab />}
    </>
  );
}

export default WritePlus;

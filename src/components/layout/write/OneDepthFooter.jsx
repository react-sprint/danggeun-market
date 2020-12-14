import React, { useState } from 'react';
import styled from 'styled-components';
import { Inner } from '../Inner';
import likeIconOff from '../../../images/ico/ico_like_count.png';
import likeIconOn from '../../../images/ico/ico_like_count_colored.png';

const DepthFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #f0f0f0;
  background-color: #fff;
`;

const DepthInner = styled(Inner)`
  display: flex;
`;

const LikeBx = styled.div`
  width: 43px;
  border-right: 1px solid #f0f0f0;

  & button {
    width: 100%;
    height: 75%;
    background: url(${({ color }) => (color === 'on' ? likeIconOn : likeIconOff)}) center center/contain no-repeat;
    outline: none;
    transition: background ease-in-out 0.3s;
  }
`;
const PriceBx = styled.div``;
const PriceTag = styled.strong``;
const PriceNotice = styled.span``;
const ChatBx = styled.div``;
const ChatBtn = styled.button``;

function OneDepthFooter({ price }) {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <DepthFooter>
      <DepthInner>
        <LikeBx color={toggleIcon ? 'on' : 'off'}>
          <button type="button" onClick={() => setToggleIcon(!toggleIcon)}>
            {}
          </button>
        </LikeBx>
        <PriceBx>
          <PriceTag>{price}원</PriceTag>
          <PriceNotice>가격제안불가</PriceNotice>
        </PriceBx>
        <ChatBx>
          <ChatBtn />
        </ChatBx>
      </DepthInner>
    </DepthFooter>
  );
}

export default OneDepthFooter;

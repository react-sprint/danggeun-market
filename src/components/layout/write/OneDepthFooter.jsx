import React, { useState } from 'react';
import styled from 'styled-components';
import { Inner } from '../Inner';
import likeIconOff from '../../../images/ico/ico_like_count.png';
import likeIconOn from '../../../images/ico/ico_like.png';

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
  justify-content: space-between;
`;
const LikePriceBx = styled.div`
  display: flex;
`;
const LikeBx = styled.div`
  width: 50px;
  padding: 10px;
  padding-right: 17px;
  border-right: 1px solid #f0f0f0;

  & button {
    width: 100%;
    height: 100%;
    background: url(${({ color }) => (color === 'on' ? likeIconOn : likeIconOff)}) center center/contain no-repeat;
    outline: none;
    transition: background ease-in-out 0.3s;
  }
`;
const PriceBx = styled.div`
  margin-left: 20px;
`;
const PriceTag = styled.strong`
  display: block;
  font-size: 1rem;
  font-weight: 700;
`;
const PriceNotice = styled.span`
  display: block;
  font-size: 0.937rem;
  color: #999;
`;
const ChatBx = styled.div``;
const ChatBtn = styled.div`
  padding: 18px 14px;
  border-radius: 6px;
  background-color: #D6D6D6;
  font-size: 0.93rem;
  font-weight: 500;
  color: #fff;
`;

function OneDepthFooter({ price }) {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <DepthFooter>
      <DepthInner>
        <LikePriceBx>
          <LikeBx color={toggleIcon ? 'on' : 'off'}>
            <button type="button" onClick={() => setToggleIcon(!toggleIcon)}>
              {}
            </button>
          </LikeBx>
          <PriceBx>
            <PriceTag>{price}원</PriceTag>
            <PriceNotice>가격제안불가</PriceNotice>
          </PriceBx>
        </LikePriceBx>
        <ChatBx>
          <ChatBtn>채팅으로 거래하기</ChatBtn>
        </ChatBx>
      </DepthInner>
    </DepthFooter>
  );
}

export default React.memo(OneDepthFooter);

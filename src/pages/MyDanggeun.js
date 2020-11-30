// 나의 당근 화면

import React from 'react';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';
import {
  MyDanggeunBlock,
  ProfileBlock,
  ProfileAddress,
  ProfileLine,
  ProfileName,
  ListLine,
  TimerLineBlock,
  TopBlock,
  TopImageBlock,
  CameraBlock,
  ProfileUrl,
  SaleBlock,
  PurchaseBlock,
  WatchBlock,
  SaleText,
  PurchaseText,
  WatchText,
  TimerBlock,
  MyAddressBlock,
  AddressAuthBlock,
  KeywordBlock,
  CollectBlock,
  ListLineTwo,
  TownWrite,
  TownComment,
  TownTheme,
  ListLineThree,
  CeoMenu,
  ListLineFour,
  FriendBlock,
  DanggeunShare,
  NoticeBlock,
  QnABlock,
  AppSet,
  EmptyBox,
} from '../styles/MyDanggeunStyle';

const MyDanggeun = () => {
  return (
    <>
      <TimerBlock>
        <Clock format="YYYY년 MM월 DD일 HH:mm:ss" ticking />
      </TimerBlock>
      <TimerLineBlock />
      <TopBlock />
      <MyDanggeunBlock>나의 당근</MyDanggeunBlock>
      <TopImageBlock />

      <ProfileBlock />
      <CameraBlock />
      <ProfileName>성윤</ProfileName>
      <ProfileAddress>안양6동</ProfileAddress>
      <Link to="./profilev2">
        <ProfileUrl>프로필 보기</ProfileUrl>
      </Link>
      <ProfileLine />

      <SaleBlock />
      <SaleText>판매내역</SaleText>
      <PurchaseBlock />
      <PurchaseText>구매내역</PurchaseText>
      <WatchBlock />
      <WatchText>관심목록</WatchText>

      <ListLine />

      <MyAddressBlock>
        <p>내 동네 설정</p>
      </MyAddressBlock>
      <AddressAuthBlock>
        <p>동네 인증하기</p>
      </AddressAuthBlock>
      <KeywordBlock>
        <p>키워드 알림</p>
      </KeywordBlock>
      <CollectBlock>
        <p>모아보기</p>
      </CollectBlock>

      <ListLineTwo />

      <TownWrite>
        <p>동네생활 글</p>
      </TownWrite>
      <TownComment>
        <p>동네생활 댓글</p>
      </TownComment>
      <TownTheme>
        <p>동네생활 주제 목록</p>
      </TownTheme>

      <ListLineThree />

      <CeoMenu>
        <p>사장님 메뉴</p>
      </CeoMenu>

      <ListLineFour />

      <FriendBlock>
        <p>친구초대</p>
      </FriendBlock>
      <DanggeunShare>
        <p>당근마켓 공유</p>
      </DanggeunShare>
      <NoticeBlock>
        <p>공지사항</p>
      </NoticeBlock>
      <QnABlock>
        <p>자주 묻는 질문</p>
      </QnABlock>
      <AppSet>
        <p>앱 설정</p>
      </AppSet>
      <EmptyBox />
      <MenuBar />
    </>
  );
};

export default MyDanggeun;

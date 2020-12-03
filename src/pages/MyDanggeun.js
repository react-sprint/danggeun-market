// 나의 당근 화면

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TopBlock } from '../components/layout/TopBlock';
import {
  MyDanggeunBlock,
  ProfileBlock,
  ProfileAddress,
  ProfileLine,
  ProfileName,
  ListLine,
  TopImageBlock,
  CameraBlock,
  ProfileUrl,
  SaleBlock,
  PurchaseBlock,
  WatchBlock,
  SaleText,
  PurchaseText,
  WatchText,
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
  LogOutButton,
  LogoutLine,
} from '../styles/MyDanggeunStyle';
import firebase from '../utils/api/fbInstance';

const MyDanggeun = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));
  const Logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      // error
    }
  };

  return (
    <>
      <TopBlock />
      <MyDanggeunBlock>나의 당근</MyDanggeunBlock>
      <TopImageBlock />

      <ProfileBlock />
      <CameraBlock />
      <ProfileName>{name}</ProfileName>
      <ProfileAddress>안양6동</ProfileAddress>
      <Link to="/profile">
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
      <LogoutLine />
      <LogOutButton onClick={Logout}>
        <p>로그아웃</p>
      </LogOutButton>
    </>
  );
};

export default MyDanggeun;

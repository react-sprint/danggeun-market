// 나의 당근 화면

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TopBlock } from '../components/layout/LoginLayout';
import {
  MyDanggeunBlock,
  ProfileLine,
  ProfileName,
  ListLine,
  TopImageBlock,
  ProfileUrl,
  SaleBlock,
  PurchaseBlock,
  EmptyBlock,
  LogOut,
  WatchBlock,
  TextBlock,
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
  ProfileImage,
  NoticeBlock,
  QnABlock,
  ListBlock,
  AppSet,
  Block,
  LogoutLine,
} from '../styles/MyDanggeunStyle';
import firebase from '../utils/api/fbInstance';

const MyDanggeun = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));
  const Logout = async () => {
    console.log('로그아웃 성공');
    try {
      await firebase.auth().signOut();
    } catch (error) {
      // error
    }
  };

  return (
    <>
      <TopBlock />
      <MyDanggeunBlock>
        <TopImageBlock />
        나의 당근
      </MyDanggeunBlock>

      <ProfileImage />

      <Link to="/profile">
        <ProfileUrl>프로필 보기</ProfileUrl>
      </Link>
      <ProfileName>
        {name}
        <span>안양6동</span>
      </ProfileName>
      <ProfileLine />

      <Block>
        <SaleBlock />
        <PurchaseBlock />
        <WatchBlock />
      </Block>

      <TextBlock>
        <p>판매내역</p>
        <p>구매내역</p>
        <p>관심목록</p>
      </TextBlock>

      <ListLine />

      <ListBlock>
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
      </ListBlock>

      <ListLineTwo />

      <ListBlock>
        <TownWrite>
          <p>동네생활 글</p>
        </TownWrite>
        <TownComment>
          <p>동네생활 댓글</p>
        </TownComment>
        <TownTheme>
          <p>동네생활 주제 목록</p>
        </TownTheme>
      </ListBlock>

      <ListLineThree />

      <ListBlock>
        <CeoMenu>
          <p>사장님 메뉴</p>
        </CeoMenu>
      </ListBlock>

      <ListLineFour />

      <ListBlock>
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
      </ListBlock>
      <LogoutLine />

      <ListBlock>
        <Link to="/login">
          <LogOut onClick={Logout}>
            <p>로그아웃</p>
          </LogOut>
        </Link>
        <EmptyBlock />
      </ListBlock>
    </>
  );
};

export default MyDanggeun;

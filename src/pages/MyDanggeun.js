import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TopBlock } from '../components/layout/LoginLayout';
import {
  MyDanggeunBlock,
  ProfileLine,
  ProfileName,
  ProfileUrl,
  SaleBlock,
  PurchaseBlock,
  LogOut,
  WatchBlock,
  TextBlock,
  Line,
  ProfileImage,
  ListBlock,
  Block,
  Ptag,
  TownBlock,
  DefaultBlock,
} from '../components/layout/MyDanggeunStyle';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import { EmptyBox } from '../components/common/EmptyBox';
import { SortBlock } from '../components/common/SortBlock';

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
      <SortBlock>
        <MyDanggeunBlock>나의 당근</MyDanggeunBlock>
      </SortBlock>

      <ProfileImage />

      <Link to="/profile">
        <ProfileUrl>프로필 보기</ProfileUrl>
      </Link>
      <ProfileName>
        {name}
        <div>안양6동</div>
      </ProfileName>
      <ProfileLine />

      <Block>
        <DefaultBlock>
          <SaleBlock />
        </DefaultBlock>
        <DefaultBlock>
          <PurchaseBlock />
        </DefaultBlock>
        <DefaultBlock>
          <WatchBlock />
        </DefaultBlock>
      </Block>

      <TextBlock>
        <Ptag>판매내역</Ptag>
        <Ptag>구매내역</Ptag>
        <Ptag>관심목록</Ptag>
      </TextBlock>

      <Line />

      <ListBlock>
        <TownBlock>
          <Ptag>내 동네 설정</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>동네 인증하기</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>키워드 알림</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>모아보기</Ptag>
        </TownBlock>
      </ListBlock>

      <Line />

      <ListBlock>
        <TownBlock>
          <Ptag>동네생활 글</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>동네생활 댓글</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>동네생활 주제 목록</Ptag>
        </TownBlock>
      </ListBlock>

      <Line />

      <ListBlock>
        <TownBlock>
          <Ptag>사장님 메뉴</Ptag>
        </TownBlock>
      </ListBlock>

      <Line />

      <ListBlock>
        <TownBlock>
          <Ptag>친구초대</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>당근마켓 공유</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>공지사항</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>자주 묻는 질문</Ptag>
        </TownBlock>
        <TownBlock>
          <Ptag>앱 설정</Ptag>
        </TownBlock>
      </ListBlock>

      <Line />

      <ListBlock>
        <Link to="/login">
          <LogOut onClick={Logout}>
            <Ptag>로그아웃</Ptag>
          </LogOut>
        </Link>
        <EmptyBox />
      </ListBlock>

      <MenuBar />
    </>
  );
};

export default MyDanggeun;

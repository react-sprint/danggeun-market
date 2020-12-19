import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  LogOut,
  ListBlock,
  Ptag,
  TownBlock,
  DanggeunWrap,
  DanggeunInner,
} from '../components/layout/dangeun/MyDanggeunStyle';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import { EmptyBlock } from '../components/common/EmptyBlock';
import DanggeunHeader from '../components/layout/dangeun/DangguenHeader';
import ProfileWrap from '../components/layout/dangeun/ProfileWrap';
import getLocation from '../components/neighborhood/getLocation';

const MyDanggeun = () => {
  const [nearRegion, setNearRegion] = useState([]);
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  const regex = /...[동읍면리]/g;
  const regionRegex = regex.exec(nearRegion);

  useEffect(() => {
    getLocation().then((passedAddressSet) => {
      setNearRegion(Array.from(passedAddressSet));
    });
  }, []);

  const Logout = async () => {
    try {
      await firebase.auth().signOut();
      alert('로그아웃 되었습니다.');
    } catch (error) {
      // error
    }
  };

  return (
    <DanggeunWrap>
      <DanggeunHeader />
      <ProfileWrap name={name} addr={regionRegex} />

      <DanggeunInner>
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
      </DanggeunInner>

      <DanggeunInner>
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
      </DanggeunInner>

      <DanggeunInner>
        <ListBlock>
          <TownBlock>
            <Ptag>사장님 메뉴</Ptag>
          </TownBlock>
        </ListBlock>
      </DanggeunInner>

      <DanggeunInner>
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
      </DanggeunInner>

      <DanggeunInner>
        <ListBlock>
          <Link to="/login">
            <LogOut onClick={Logout}>
              <Ptag>로그아웃</Ptag>
            </LogOut>
          </Link>
          <EmptyBlock />
        </ListBlock>
      </DanggeunInner>

      <MenuBar />
    </DanggeunWrap>
  );
};

export default MyDanggeun;

// 프로필 -> 프로필 수정 화면

import React from 'react';
import { Link } from 'react-router-dom';
import { Danggeun } from '../components/layout/DanggeunImage';
import {
  TopLine,
  ProfileImage,
  Camera,
  NameEdit,
  EndText,
  TextBlock,
  TopDiv,
  BackArrow,
} from '../styles/ProfileEditStyle';

const ProfileEdit = () => {
  return (
    <>
      <TopDiv>
        <Link to="profile">
          <BackArrow />
        </Link>
        <TextBlock>프로필 수정</TextBlock>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
          <EndText>완료</EndText>
        </Link>
      </TopDiv>

      <TopLine />
      <ProfileImage />
      <Camera />
      <NameEdit value="성윤" />
      <Danggeun />
    </>
  );
};

export default ProfileEdit;

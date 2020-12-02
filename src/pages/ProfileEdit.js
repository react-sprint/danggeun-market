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

const ProfileEdit = ({ modify }) => (
  <>
    <TopDiv>
      <Link to="profilev2">
        <BackArrow />
      </Link>
      <TextBlock>프로필 수정</TextBlock>
      <Link to="/profilev2" style={{ textDecoration: 'none', color: 'black' }}>
        <EndText>완료</EndText>
      </Link>
    </TopDiv>

    <TopLine />
    <ProfileImage />
    <Camera />
    <NameEdit value={modify} />
    <Danggeun />
  </>
);

export default ProfileEdit;

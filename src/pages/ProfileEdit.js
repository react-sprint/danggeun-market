// 프로필 -> 프로필 수정 화면

import React from 'react';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';
import {
  TimerBlock,
  TimerLineBlock,
  TopBlock,
  BackArrow,
  ProfileImage,
} from '../styles/ProfileEditStyle';

const ProfileEdit = () => {
  return (
    <>
      <TimerBlock>
        <Clock format="YYYY년 MM월 DD일 HH:mm:ss" ticking />
      </TimerBlock>
      <TimerLineBlock />
      <Link to="/profilev2">
        <BackArrow />
      </Link>
      <ProfileImage />
      <TopBlock />
      <MenuBar />
    </>
  );
};

export default ProfileEdit;

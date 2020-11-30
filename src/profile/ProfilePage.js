import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/common/BottomNavBar';
import { Danggeun } from '../styles/LoginStyle';
import {
  AttentionBlock,
  BackImage,
  ProfileImage,
  ProfileModify,
  ProfileName,
  SaleBlock,
  TopBlock,
  TopText,
  ProfileWrapper,
} from '../styles/ProfileStyle';

const ProfilePage = () => {
  return (
    <>
      <ProfileWrapper>
        <Link to="/">
          <BackImage />
        </Link>
        <TopBlock />

        <TopText>프로필</TopText>
        <ProfileImage />
        <Link to="/profilemodify">
          <ProfileModify>수정</ProfileModify>
        </Link>

        <ProfileName>군침이 싸악</ProfileName>

        <Link to="/sale">
          <SaleBlock>판매상품</SaleBlock>
        </Link>
        <Link to="/attention">
          <AttentionBlock>관심상품</AttentionBlock>
        </Link>
        <Danggeun />
        <BottomNavBar />
      </ProfileWrapper>
    </>
  );
};

export default ProfilePage;

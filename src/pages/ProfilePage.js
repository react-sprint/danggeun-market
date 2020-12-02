import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../components/common/MenuBar';
import ContainerModify from '../containers/ContainerModify';
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
} from '../styles/ProfileStyle';

const ProfilePage = () => {
  return (
    <>
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />

      <TopText>프로필</TopText>
      <ProfileImage />
      <Link to="/profilemodify">
        <ProfileModify>수정</ProfileModify>
      </Link>

      <ProfileName />

      <Link to="/sale">
        <SaleBlock>판매상품</SaleBlock>
      </Link>
      <Link to="/attention">
        <AttentionBlock>관심상품</AttentionBlock>
      </Link>
      <Danggeun />
      <MenuBar />
    </>
  );
};

export default ProfilePage;

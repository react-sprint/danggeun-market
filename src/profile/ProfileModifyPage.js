import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../utils/hooks/useInput';
import BottomNavBar from '../components/common/BottomNavBar';
import { Danggeun } from '../styles/LoginStyle';
import {
  BackImage,
  ProfileImage,
  ProfileName,
  TopBlock,
  TopText,
  ModifyEndButton,
} from '../styles/ProfileModifyStyle';

// eslint-disable-next-line react/prop-types
const ProfileModifyPage = ({ data }) => {
  const { value, onChange } = useInput(data);
  return (
    <>
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />

      <TopText>프로필 수정</TopText>
      <ProfileImage />

      <ProfileName value={value} onChange={onChange} type="text" />
      <Link to="/profile">
        <ModifyEndButton>수정완료</ModifyEndButton>
      </Link>

      <Danggeun />
      <BottomNavBar />
    </>
  );
};

ProfileName.defaultProps = { data: '' };

export default ProfileModifyPage;

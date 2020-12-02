// 프로필 -> 프로필 수정 화면

import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { LinkStyle } from '../styles/LinkStyle';
import { changeName } from '../modules/profile';

const ProfileEdit = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  const [tempName, setTempName] = useState('');

  const dispatch = useDispatch();

  const onChangeName = useCallback((name) => dispatch(changeName(name)), [
    dispatch,
  ]);

  return (
    <>
      <LinkStyle>
        <TopDiv>
          <Link to="/profile">
            <BackArrow />
          </Link>
          <TextBlock>프로필 수정</TextBlock>

          <Link to="/profile">
            <EndText onClick={() => onChangeName(tempName)}>완료</EndText>
          </Link>
        </TopDiv>

        <TopLine />
        <ProfileImage />
        <Camera />
        <NameEdit
          onChange={(e) => setTempName(e.target.value)}
          value={tempName}
        />
        <Danggeun />
      </LinkStyle>
    </>
  );
};

export default ProfileEdit;

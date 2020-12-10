// 프로필 -> 프로필 수정 화면

import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Danggeun } from '../components/layout/DanggeunImage';
import {
  ProfileImage,
  NameEdit,
  EndText,
  TextBlock,
  BackArrow,
  EndBlock,
} from '../styles/ProfileEditStyle';
import { changeName } from '../modules/profile';
import { TopBlock } from '../components/layout/LoginLayout';

const ProfileEdit = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  const [tempName, setTempName] = useState(name);

  const dispatch = useDispatch();

  const onChangeName = useCallback((name) => dispatch(changeName(name)), [
    dispatch,
  ]);

  return (
    <>
      <TopBlock>
        <Link to="/profile">
          <BackArrow />
        </Link>
        <TextBlock>프로필 수정</TextBlock>

        <EndBlock>
          <Link to="/profile">
            <EndText onClick={() => onChangeName(tempName)}>완료</EndText>
          </Link>
        </EndBlock>
      </TopBlock>

      <ProfileImage />

      <NameEdit
        onChange={(e) => setTempName(e.target.value)}
        value={tempName}
      />
      <Danggeun />
    </>
  );
};

export default ProfileEdit;

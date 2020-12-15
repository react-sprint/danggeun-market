import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ProfileImage,
  NameEdit,
  EndText,
  TextBlock,
  BackArrow,
  TopDiv,
} from '../components/layout/ProfileEditStyle';
import { changeName } from '../modules/profile';
import { SortBlock } from '../components/common/SortBlock';

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
      <TopDiv>
        <Link to="/profile">
          <BackArrow />
        </Link>
        <TextBlock>프로필 수정</TextBlock>

        <Link to="/profile">
          <EndText onClick={() => onChangeName(tempName)}>완료</EndText>
        </Link>
      </TopDiv>

      <SortBlock>
        <ProfileImage />
      </SortBlock>

      <SortBlock>
        <NameEdit
          onChange={(e) => setTempName(e.target.value)}
          value={tempName}
        />
      </SortBlock>
    </>
  );
};

export default ProfileEdit;

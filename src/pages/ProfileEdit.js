import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ProfileImage,
  NameEdit,
  EndText,
  TextBlock,
  BackArrow,
} from '../components/layout/ProfileEditStyle';
import { changeName } from '../modules/profile';
import { TopBlock } from '../components/layout/LoginLayout';
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
      <TopBlock>
        <Link to="/profile">
          <BackArrow />
        </Link>
        <TextBlock>프로필 수정</TextBlock>

        <Link to="/profile">
          <EndText onClick={() => onChangeName(tempName)}>완료</EndText>
        </Link>
      </TopBlock>

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

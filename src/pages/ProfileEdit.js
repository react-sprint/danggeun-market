import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileImage, NameEdit } from '../components/layout/ProfileEditStyle';
import { changeName } from '../modules/profile';
import { SortBlock, SortPaddingBlock } from '../components/common/SortBlock';
import ProfileEditHeader from '../components/layout/profileEdit/ProfileEditHeader';

const ProfileEdit = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  const [tempName, setTempName] = useState(name);

  const dispatch = useDispatch();

  const onChangeName = useCallback((name) => dispatch(changeName(name)), [dispatch]);

  return (
    <>
      <ProfileEditHeader onChangeName={onChangeName} tempName={tempName} />

      <SortPaddingBlock>
        <ProfileImage />
      </SortPaddingBlock>

      <SortBlock>
        <NameEdit onChange={(e) => setTempName(e.target.value)} value={tempName} />
      </SortBlock>
    </>
  );
};

export default ProfileEdit;

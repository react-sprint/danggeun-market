import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileName } from '../styles/ProfileStyle';
import { modify } from '../modules/profile';

const ContainerModify = () => {
  const dispatch = useDispatch();

  const profileModify = useSelector((e) => {
    return e.target.value;
  });

  const onChangeInput = useCallback(() => {
    return dispatch(modify());
  }, [dispatch]);

  return <ProfileName input={profileModify} onChange={onChangeInput} />;
};

export default ContainerModify;

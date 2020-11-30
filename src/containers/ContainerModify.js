import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProfileModify, ProfileName } from '../styles/ProfileStyle';
import { modify } from '../modules/profile';

const ContainerModify = () => {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => {
    return {
      profile: state.profile.profile,
    };
  });

  const onChange = (e) => {
    return dispatch(modify(e.target.value));
  };

  const onClick = () => {
    return dispatch(modify);
  };

  return {};
};

export default ContainerModify;

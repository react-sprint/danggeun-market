import React from 'react';
import styled from 'styled-components';
import { ProfileImage, ProfileName } from '../dangeun/MyDanggeunStyle';
import { MannerBlock } from './ProfileStyle';

const ProfileDetailWrap = styled.div`
  padding-top: 85px;
`;

const Temperature = styled.div``;

const TemperNumberWrap = styled.div``;

function ProfileDetail({ userName }) {
  return (
    <ProfileDetailWrap>
      <ProfileImage />
      <ProfileName>{userName}</ProfileName>
      <MannerBlock>매너온도</MannerBlock>
      <Temperature>
        <TemperNumberWrap />
      </Temperature>
    </ProfileDetailWrap>
  );
}

export default ProfileDetail;

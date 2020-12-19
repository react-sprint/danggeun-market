import React from 'react';
import styled from 'styled-components';
import { ProfileImage, ProfileName } from '../dangeun/MyDanggeunStyle';
import { MannerBlock } from './ProfileStyle';
import temperLevel1 from '../../../images/ico/ico_manner_01.png';
import temperLevel2 from '../../../images/ico/ico_manner_02.png';
import temperLevel3 from '../../../images/ico/ico_manner_03.png';
import temperLevel4 from '../../../images/ico/ico_manner_04.png';
import temperLevel5 from '../../../images/ico/ico_manner_05.png';
import temperLevel6 from '../../../images/ico/ico_manner_06.png';

const ProfileDetailWrap = styled.div`
  padding-top: 85px;
`;

const Temperature = styled.div``;

const TemperNumberWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TemperNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ color }) => color};
`;

const TemperIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 13px;
`;

const TemperProgress = styled.div`
  position: relative;
  width: 100%;
  height: 13px;
  margin: 7px 0 0 4px;
  border-radius: 7px;
  background-color: #e8ece8;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ temper }) => temper}%;
    height: 100%;
    border-radius: 7px;
    background-color: ${({ progress }) => progress};
    animation-name: charge;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }

  @keyframes charge {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ temper }) => temper}%;
    }
  }
`;

function ProfileDetail({ userName }) {
  const temper = Number((Math.random() * 100).toFixed(1));

  const temperFunc = ([props1, props2, props3, props4, props5, props6]) => {
    switch (true) {
      case temper <= 16.6:
        return props1;
      case temper <= 33.3:
        return props2;
      case temper <= 49.6:
        return props3;
      case temper <= 66.6:
        return props4;
      case temper <= 83.3:
        return props5;
      case temper <= 100:
        return props6;
      default:
        throw new Error('Unhandeld Error Temperature');
    }
  };
  const temperIco = temperFunc([temperLevel1, temperLevel2, temperLevel3, temperLevel4, temperLevel5, temperLevel6]);

  const temperColor = temperFunc(['#222', '#0d3a65', '#0b5aa5', '#319e45', '#df9100', '#de5d06']);

  return (
    <ProfileDetailWrap>
      <ProfileImage />
      <ProfileName>{userName}</ProfileName>
      <MannerBlock>매너온도</MannerBlock>
      <Temperature>
        <TemperNumberWrap>
          <TemperNumber color={temperColor}>{`${temper}°C`}</TemperNumber>
          <TemperIcon>
            <img src={temperIco} alt="icon" />
          </TemperIcon>
        </TemperNumberWrap>
        <TemperProgress temper={temper} progress={temperColor} />
      </Temperature>
    </ProfileDetailWrap>
  );
}

export default ProfileDetail;

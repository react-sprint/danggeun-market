import React from 'react';
import styled from 'styled-components';
import profile from '../../../images/ico/ico_profile_placeholder.png';
import temperLevel1 from '../../../images/ico/ico_manner_01.png';
import temperLevel2 from '../../../images/ico/ico_manner_02.png';
import temperLevel3 from '../../../images/ico/ico_manner_03.png';
import temperLevel4 from '../../../images/ico/ico_manner_04.png';
import temperLevel5 from '../../../images/ico/ico_manner_05.png';
import temperLevel6 from '../../../images/ico/ico_manner_06.png';

const UserDataWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
`;

const UserThumbnail = styled.div`
  & img {
    width: 45px;
  }
`;
const UserProfile = styled.div`
  margin-left: 10px;
`;
const UserId = styled.strong`
  display: block;
  font-size: 1rem;
  font-weight: 700;
`;
const UserLocation = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #666;
`;

const Temperature = styled.div``;

const TemperTop = styled.div`
  display: flex;
  align-items: center;
`;
const TemperBot = styled.div`
  margin-top: 5px;
  text-align: right;
  & span {
    font-size: 0.75rem;
    color: #aaa;
  }
`;

const TemperTopLeft = styled.div``;
const TemperText = styled.span`
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-weight: 900;
  color: ${({ color }) => color};
`;
const TemperProgress = styled.div`
  position: relative;
  width: 55px;
  height: 4px;
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
const TemperIcon = styled.div`
  width: 26px;
  margin-left: 10px;
`;

function DetailUserData({ username }) {
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
  const temperIco = temperFunc([
    temperLevel1,
    temperLevel2,
    temperLevel3,
    temperLevel4,
    temperLevel5,
    temperLevel6,
  ]);

  const temperColor = temperFunc([
    '#222',
    '#0d3a65',
    '#0b5aa5',
    '#319e45',
    '#df9100',
    '#de5d06',
  ]);

  return (
    <UserDataWrap>
      <UserData>
        <UserThumbnail>
          <img src={profile} alt="profile" />
        </UserThumbnail>
        <UserProfile>
          <UserId>{username}</UserId>
          <UserLocation>행복동</UserLocation>
        </UserProfile>
      </UserData>
      <Temperature>
        <TemperTop>
          <TemperTopLeft>
            <TemperText color={temperColor}>{`${temper}°C`}</TemperText>
            <TemperProgress temper={temper} progress={temperColor} />
          </TemperTopLeft>
          <TemperIcon>
            <img src={temperIco} alt="temperIcon" />
          </TemperIcon>
        </TemperTop>
        <TemperBot>
          <span>매너온도</span>
        </TemperBot>
      </Temperature>
    </UserDataWrap>
  );
}

export default DetailUserData;

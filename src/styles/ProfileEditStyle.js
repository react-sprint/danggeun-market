import styled from 'styled-components';
import back from '../images/ico/ico_back_home_arrow.png';
import profile from '../images/ico/ico_profile_placeholder.png';

export const TimerBlock = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
`;

export const TimerLineBlock = styled.div`
  display: flex;
  position: absolute;
  top: 35px;
  left: 0px;

  width: 100%;
  height: 0px;
  border: 1px solid #f0f0f0;
`;

export const BackArrow = styled.div`
  display: flex;
  position: absolute;
  top: 56px;
  left: 22px;

  width: 17px;
  height: 17px;

  cursor: pointer;

  background-image: url(${back});
  background-size: cover;
`;

export const ProfileImage = styled.div`
  display: flex;

  position: absolute;
  top: 149px;
  left: 148px;

  width: 129px;
  height: 129px;

  cursor: pointer;

  background-image: url(${profile});
  background-size: cover;
`;

export const TopBlock = styled.div`
  display: flex;

  position: absolute;
  top: 95px;
  left: 0px;
  width: 100%;
  height: 0px;

  border: 1px solid #f0f0f0;
`;

import styled from 'styled-components';
import back from '../images/ico/ico_back_home_arrow.png';
import profile from '../images/ico/ico_profile_placeholder.png';
import camera from '../images/ico/ico_profile_camera.png';

export const ProfileImage = styled.div`
  display: flex;

  position: absolute;
  top: 119px;
  left: 148px;

  width: 129px;
  height: 129px;

  cursor: pointer;

  background-image: url(${profile});
  background-size: cover;
`;

export const Camera = styled.div`
  justify-content: center;
  align-items: center;

  margin-top: 170px;
  margin-left: 220px;

  width: 30px;
  height: 30px;

  background-image: url(${camera});
  background-size: cover;
`;

export const TopLine = styled.div`
  margin-top: 6px;
  border: 1px solid #f0f0f0;
`;

export const BackArrow = styled.div`
  display: flex;
  position: absolute;
  top: 26px;
  left: 22px;

  width: 17px;
  height: 17px;

  cursor: pointer;

  background-image: url(${back});
  background-size: cover;
`;

export const TextBlock = styled.div`
  position: absolute;
  top: 25px;
  left: 60px;

  font-weight: 500;
  font-size: 18px;
`;

export const EditText = styled.div`
  font-size: 18px;
`;

export const TopDiv = styled.div`
  display: flex;
`;

export const EndText = styled.p`
  font-weight: 500;
  font-size: 16px;

  margin-left: 270px;
`;

export const NameEdit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 80px;

  width: 200px;
  height: 50px;

  border-bottom: 2px solid #ff8a3d;
  border-top: none;
  border-left: none;
  border-right: none;
  box-sizing: border-box;

  color: black;
  font-size: 18px;
  font-weight: 400;
  text-align: center;

  line-height: 60px;
`;

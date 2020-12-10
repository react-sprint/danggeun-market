import styled from 'styled-components';
import back from '../images/ico/ico_back_home_arrow.png';
import profile from '../images/ico/ico_profile_placeholder.png';
import camera from '../images/ico/ico_profile_camera.png';

export const ProfileImage = styled.div`
  display: flex;
  width: 129px;
  height: 129px;

  margin-left: 32%;
  margin-top: 50px;

  cursor: pointer;

  background-image: url(${profile});
  background-size: cover;
`;

export const BackArrow = styled.div`
  width: 17px;
  height: 17px;

  margin-left: 10px;
  margin-top: 20px;

  cursor: pointer;

  background-image: url(${back});
  background-size: cover;
`;

export const TextBlock = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
`;

export const EditText = styled.div`
  font-size: 18px;
`;

export const EndText = styled.p`
  margin-left: 100px;
  margin-top: 20px;

  font-weight: 500;
  font-size: 16px;
`;

export const EndBlock = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
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
  cursor: pointer;
`;

import styled from 'styled-components';
import back from '../../images/ico/ico_back_home_arrow.png';
import profile from '../../images/ico/ico_profile_placeholder.png';

export const ProfileImage = styled.div`
  width: 129px;
  height: 129px;

  cursor: pointer;

  background-image: url(${profile});
  background-size: cover;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
`;

export const BackArrow = styled.div`
  width: 17px;
  height: 17px;

  margin-left: 40px;

  cursor: pointer;

  background-image: url(${back});
  background-size: cover;
`;

export const TextBlock = styled.div`
  font-weight: 500;
  font-size: 18px;

  margin-right: 20px;
  margin-bottom: 100px;
`;

export const EndText = styled.p`
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
`;

export const NameEdit = styled.input`
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

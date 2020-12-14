import styled from 'styled-components';
import x from '../images/ico/ico_window_close_outline_18.png';
import danggeun from '../images/ico/ico_logo_72x72.png';
import loopy from '../images/ico/loopy.jpeg';

export const BackImage = styled.div`
  display: flex;

  position: absolute;
  left: 23.21px;
  top: 38.21px;

  width: 14.58px;
  height: 14.58px;

  background-image: url(${x});
  background-size: cover;
`;

export const TopBlock = styled.div`
  display: flex;

  position: absolute;
  left: 0px;
  top: 71px;

  width: 412px;
  height: 0px;

  border: 1px solid #c9c9c9;
`;

export const TopText = styled.p`
  position: absolute;
  left: 160px;
  top: 20px;

  width: 94px;
  height: 17px;

  color: #000000;

  font-size: 18px;
  font-weight: 500;

  font-family: Roboto;
  font-style: normal;
  line-height: 21px;
  text-align: center;
`;

export const ProfileImage = styled.div`
  position: absolute;
  left: 110px;
  top: 110px;

  width: 200px;
  height: 200px;

  border: 2px solid #c9c9c9;
  border-radius: 50%;

  background-image: url(${loopy});
  background-size: cover;
`;

export const ProfileName = styled.input`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 348px;
  left: 110px;

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

export const ModifyEndButton = styled.button`
  display: flex;
  justify-content: center;

  position: absolute;
  left: 18px;
  top: 500px;

  width: 380px;
  height: 53px;

  border: none;
  border-radius: 6px;

  color: white;

  font-size: 20px;
  line-height: 53px;

  background: #ff8a3d;
`;

export const Danggeun = styled.div`
  position: absolute;
  top: 600px;
  left: 173px;

  width: 72px;
  height: 72px;

  background-image: url(${danggeun});
  background-size: cover;
`;

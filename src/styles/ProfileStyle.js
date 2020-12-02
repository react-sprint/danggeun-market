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

export const ProfileModify = styled.p`
  position: absolute;
  left: 305px;
  top: 270px;

  width: 40px;
  height: 25px;

  font-size: 20px;
  font-weight: normal;

  color: #ff8a3d;

  line-height: 23px;
  text-align: center;
`;

export const ProfileName = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 346px;
  left: 110px;

  width: 200px;
  height: 50px;

  border-bottom: 2px solid #ff8a3d;
  border-top: none;
  border-left: none;
  border-right: none;

  color: black;
  font-size: 18px;
  line-height: 60px;
`;

export const SaleBlock = styled.button`
  position: absolute;
  left: 17px;
  top: 450px;

  width: 380px;
  height: 60px;

  border: 1px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 10px;

  font-size: 18px;

  background: #ffffff;
`;

export const AttentionBlock = styled.button`
  position: absolute;
  left: 17px;
  top: 535px;

  width: 380px;
  height: 60px;

  border: 1px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 10px;

  font-size: 18px;

  background: #ffffff;
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

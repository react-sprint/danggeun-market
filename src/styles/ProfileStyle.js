import styled from 'styled-components';
import x from '../images/ico/ic_window_close_outline_18.png';
import danggeun from '../images/ico/ico_logo_72x72.png';
import loopy from '../images/ico/loopy.jpeg';

export const ProfileWrapper = styled.div``;

export const BackImage = styled.div`
  display: flex;

  left: 23.21px;
  top: 38.21px;

  width: 14.58px;
  height: 14.58px;

  background-image: url(${x});
  background-size: cover;
`;

export const TopBlock = styled.div`
  display: flex;

  width: 412px;
  height: 0px;

  border: 1px solid #c9c9c9;
`;

export const TopText = styled.p`
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
  width: 200px;
  height: 200px;

  border: 2px solid #c9c9c9;
  border-radius: 50%;

  background-image: url(${loopy});
  background-size: cover;
`;

export const ProfileModify = styled.p`
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
  width: 380px;
  height: 60px;

  border: 1px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 10px;

  font-size: 18px;

  background: #ffffff;
`;

export const AttentionBlock = styled.button`
  width: 380px;
  height: 60px;

  border: 1px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 10px;

  font-size: 18px;

  background: #ffffff;
`;

export const Danggeun = styled.div`
  width: 72px;
  height: 72px;

  background-image: url(${danggeun});
  background-size: cover;
`;

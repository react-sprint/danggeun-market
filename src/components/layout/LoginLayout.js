import styled from 'styled-components';
import x from '../../images/ico/ic_window_close_outline_18.png';

export const TopBlock = styled.div`
  display: flex;

  position: absolute;
  top: 65px;
  left: 0px;
  width: 412px;
  height: 0px;

  border: 1px solid #f0f0f0;
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

export const EmailText = styled.p`
  position: absolute;
  left: 23px;
  top: 100px;

  width: 22px;
  height: 17px;

  font-size: 16px;
  font-weight: 400;

  line-height: 17px;

  color: #8e8e8e;
`;

export const EmailBlock = styled.input`
  position: absolute;
  left: 18px;
  top: 150px;

  width: 380px;
  height: 53px;

  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 18px;
  cursor: pointer;

  background: #ffffff;
`;

export const PasswordText = styled.p`
  position: absolute;
  left: 23px;
  top: 210px;

  width: 79px;
  height: 17px;

  font-weight: 400;
  font-size: 16px;

  line-height: 17px;

  color: #8e8e8e;
`;

export const PasswordBlock = styled.input`
  position: absolute;
  left: 20px;
  top: 260px;

  width: 380px;
  height: 53px;

  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 16px;
  cursor: pointer;

  background: #ffffff;
`;

export const RegisterText = styled.p`
  display: flex;
  position: absolute;
  left: 23px;
  top: 500px;

  height: 23px;

  font-size: 12px;
  font-weight: 500;

  color: #8e8e8e;

  line-height: 14px;
  align-items: center;
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;

  position: absolute;
  left: 18px;
  top: 540px;

  width: 380px;
  height: 53px;

  border: none;
  border-radius: 6px;

  color: white;
  font-size: 17px;

  font-weight: 400;
  font-size: 18px;

  line-height: 53px;

  cursor: pointer;

  background: #495058;
`;

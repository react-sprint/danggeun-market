import styled from 'styled-components';
import x from '../../images/ico/ic_window_close_outline_18.png';

export const TopBlock = styled.div`
  display: flex;

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 17px;

    color: #000000;

    font-size: 18px;
    font-weight: 500;

    text-align: center;
  }
`;

export const BackImage = styled.div`
  display: flex;

  width: 14.58px;
  height: 14.58px;

  margin-top: 20px;

  background-image: url(${x});
  background-size: cover;
`;

export const EmailText = styled.p`
  display: flex;

  margin-top: 50px;

  font-size: 16px;
  font-weight: 400;

  line-height: 17px;

  color: #8e8e8e;

  div {
    margin-left: 70px;
    color: black;
  }
`;

export const EmailBlock = styled.input`
  width: 100%;
  height: 53px;

  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 18px;
  cursor: pointer;

  background: #ffffff;
`;

export const PasswordText = styled.p`
  display: flex;

  margin-top: 40px;

  color: #8e8e8e;

  div {
    margin-left: 40px;
    color: black;
  }
`;

export const PasswordBlock = styled.input`
  width: 100%;
  height: 53px;

  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 16px;
  cursor: pointer;

  background: #ffffff;
`;

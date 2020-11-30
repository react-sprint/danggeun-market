import styled from 'styled-components';
import x from '../images/ico/ic_window_close_outline_18.png';
import danggeun from '../images/ico/ico_logo_72x72.png';

export const LoginWrapper = styled.div`
  height: calc(100vh - 40px - 62.58px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackImage = styled.div`
  display: flex;

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

export const IdContainer = styled.div`
  padding-top: 27px;
`;

export const IdText = styled.p`
  height: 17px;
  margin-bottom: 11px;
  font-size: 18px;
  font-weight: 400;

  line-height: 17px;

  color: #8e8e8e;
`;

export const IdBlock = styled.input`
  height: 53px;
  width: 100%;
  margin-bottom: 11px;
  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 20px;

  background: #ffffff;
`;

export const PasswordContainer = styled.div``;
export const PasswordText = styled.p`
  height: 17px;
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 18px;

  line-height: 17px;

  color: #8e8e8e;
`;

export const PasswordBlock = styled.input`
  height: 53px;
  width: 100%;
  margin-bottom: 11px;
  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 20px;

  background: #ffffff;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 53px;

  border: none;
  border-radius: 6px;

  background: #ff8a3d;

  margin-bottom: 16px;

  p {
    width: 380px;

    font-weight: 400;
    font-size: 18px;

    color: #ffffff;

    line-height: 21px;
  }
`;

export const RegisterText = styled.p`
  display: flex;
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
  align-items: center;

  width: 100%;
  height: 53px;

  border: none;
  border-radius: 6px;

  background: #495058;

  p {
    font-weight: 400;
    font-size: 18px;

    color: #ffffff;

    line-height: 20px;
  }
`;

export const InputContainer = styled.div``;
export const ButtonContainer = styled.div`
  margin-bottom: 20vh;
`;

export const Danggeun = styled.div`
  height: 72px;

  background-image: url(${danggeun});
  background-size: cover;
`;

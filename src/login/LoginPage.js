import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/common/BottomNavBar';
import {
  BackImage,
  TopBlock,
  TopText,
  IdContainer,
  IdText,
  IdBlock,
  PasswordContainer,
  PasswordText,
  PasswordBlock,
  LoginButton,
  RegisterButton,
  RegisterText,
  Danggeun,
  LoginWrapper,
  InputContainer,
  ButtonContainer,
} from '../styles/LoginStyle';

const LoginPage = () => {
  const onClick = () => {
    return console.log('로그인 성공');
  };
  return (
    <>
      <LoginWrapper>
        {/* <Link to="/">
          <BackImage />
        </Link>
        <TopBlock />
        <TopText>로그인</TopText> */}

        <InputContainer>
          <IdContainer>
            <IdText>ID</IdText>
            <IdBlock />
          </IdContainer>

          <PasswordContainer>
            <PasswordText>Password</PasswordText>
            <PasswordBlock type="password" />
          </PasswordContainer>
        </InputContainer>

        <ButtonContainer>
          <Link to="/">
            <LoginButton onClick={onClick}>
              <p>로그인</p>
            </LoginButton>
          </Link>

          <RegisterText>아직 계정이 없으신가요?</RegisterText>
          <Link to="register">
            <RegisterButton>
              <p>회원가입</p>
            </RegisterButton>
          </Link>
        </ButtonContainer>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;

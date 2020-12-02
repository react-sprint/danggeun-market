import React from 'react';
import { Link } from 'react-router-dom';
import {
  BackImage,
  TopBlock,
  TopText,
  IdText,
  IdBlock,
  PasswordText,
  PasswordBlock,
  LoginButton,
  RegisterButton,
  RegisterText,
  Danggeun,
} from '../styles/LoginStyle';

const LoginPage = () => {
  const onClick = () => {
    return console.log('로그인 성공');
  };
  return (
    <>
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />
      <TopText>로그인</TopText>

      <IdText>ID</IdText>
      <IdBlock />

      <PasswordText>Password</PasswordText>
      <PasswordBlock type="password" />

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
      <Danggeun />
    </>
  );
};

export default LoginPage;

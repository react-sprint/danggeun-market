import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/common/BottomNavBar';
import {
  BackImage,
  TopBlock,
  TopText,
  IdText,
  IdBlock,
  PasswordText,
  PasswordBlock,
  RegisterButton,
  RegisterText,
  PasswordConfirmText,
  PasswordConfirmBlock,
  Danggeun,
} from '../styles/RegisterStyle';

const LoginPage = () => {
  const onClick = () => {
    return console.log('회원가입 성공');
  };
  return (
    <>
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />

      <TopText>회원가입</TopText>
      <IdText>ID</IdText>
      <IdBlock />

      <PasswordText>Password</PasswordText>
      <PasswordBlock type="password" />

      <PasswordConfirmText>PasswordConfirm</PasswordConfirmText>
      <PasswordConfirmBlock type="password" />

      <RegisterText>계정을 만들어 당근마켓을 이용해보세요</RegisterText>

      <Link to="/">
        <RegisterButton onClick={onClick}>
          <p>회원가입</p>
        </RegisterButton>
      </Link>
      <Danggeun />
      <BottomNavBar />
    </>
  );
};

export default LoginPage;

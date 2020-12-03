import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../utils/api/fbInstance';
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
  const { register, handleSubmit, watch, errors } = useForm();
  const [errorFormSubmit, setErrorFormSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      setLoading(false);
    } catch (error) {
      setErrorFormSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFormSubmit('');
      }, 5000);
    }
  };

  return (
    <>
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />
      <TopText>로그인</TopText>

      <IdText>Email</IdText>
      <IdBlock />

      <PasswordText>Password</PasswordText>
      <PasswordBlock type="password" />

      <Link to="/">
        <LoginButton>
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

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
} from '../styles/LoginStyle';
import MenuBar from '../components/common/MenuBar';

const LoginPage = () => {
  const { register, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit('');
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <IdText>Email</IdText>
        <IdBlock
          name="email"
          type="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일 형식이 맞지 않습니다.</p>}

        <PasswordText>Password</PasswordText>
        <PasswordBlock
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />

        {errors.password && errors.password.type === 'required' && (
          <p>올바른 비밀번호가 아닙니다.</p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p>비밀번호의 길이가 밎지 않습니다.</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}

        <LoginButton type="submit" disabled={loading} value="로그인" />

        <RegisterText>아직 계정이 없으신가요?</RegisterText>
        <Link to="/signup">
          <RegisterButton>
            <p>회원가입</p>
          </RegisterButton>
        </Link>
        <MenuBar />
      </form>
    </>
  );
};

export default LoginPage;

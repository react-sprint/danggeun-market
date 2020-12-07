import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../utils/api/fbInstance';
import { LoginButton } from '../styles/LoginStyle';
import MenuBar from '../components/common/MenuBar';
import {
  TopBlock,
  TopText,
  BackImage,
  EmailBlock,
  EmailText,
  IdContainer,
  IdText,
  IdBlock,
  PasswordContainer,
  PasswordText,
  PasswordBlock,
  PasswordText,
  RegisterButton,
  RegisterText,
} from '../components/layout/LoginLayout';
import { EmailError, LoginPasswordError } from '../styles/ErrorStyle';
  Danggeun,
  LoginWrapper,
  InputContainer,
  ButtonContainer,
} from '../styles/LoginStyle';

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
        <EmailText>Email</EmailText>
        <EmailBlock
          name="email"
          type="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />

        <EmailError>
          {errors.email && <p>이메일 형식이 맞지 않습니다.</p>}
        </EmailError>

        <PasswordText>Password</PasswordText>
        <PasswordBlock
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />
      <IdText>Email</IdText>
      <IdBlock />

      <PasswordContainer>
        <PasswordText>Password</PasswordText>
        <PasswordBlock type="password" />
      </PasswordContainer>

        <LoginPasswordError>
          {errors.password && errors.password.type === 'required' && (
            <p>올바른 비밀번호가 아닙니다.</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p>비밀번호의 길이가 밎지 않습니다.</p>
          )}
        </LoginPasswordError>

        {errorFromSubmit && <p>로그인 실패</p>}

        <LoginButton type="submit" disabled={loading} value="로그인" />

        <RegisterText>아직 계정이 없으신가요?</RegisterText>
        <Link to="/signup">
          <RegisterButton>회원가입</RegisterButton>
        </Link>
        <MenuBar />
      </form>
    </>
  );
};

export default LoginPage;

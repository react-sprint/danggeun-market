import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import {
  TopBlock,
  BackImage,
  EmailandPasswordBlock,
  EmailandPasswordText,
  RegisterButton,
  LoginButton,
} from '../components/layout/LoginLayout';
import { SortBlock } from '../components/common/SortBlock';

const LoginPage = () => {
  const { register, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
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
      <TopBlock>
        <Link to="/">
          <BackImage />
        </Link>
        <p>로그인</p>
      </TopBlock>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailandPasswordText>
          Email
          {errors.email && <p>이메일 형식이 맞지 않습니다.</p>}
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock
            name="email"
            type="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
        </SortBlock>
        <EmailandPasswordText>
          Password
          {errors.password && errors.password.type === 'required' && (
            <p>올바른 비밀번호가 아닙니다.</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p>비밀번호의 길이가 밎지 않습니다.</p>
          )}
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6 })}
          />
        </SortBlock>

        <SortBlock>
          <LoginButton type="submit" disabled={loading}>
            로그인
          </LoginButton>
        </SortBlock>

        <Link to="/signup">
          <SortBlock>
            <RegisterButton>회원가입</RegisterButton>
          </SortBlock>
        </Link>
      </form>
      <MenuBar />
    </>
  );
};

export default LoginPage;

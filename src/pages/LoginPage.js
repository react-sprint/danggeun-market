import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
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
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      alert('성공적으로 로그인이 되었습니다.');
      history.push('/');
    } catch (error) {
      setLoading(false);

      switch (error.code) {
        case 'auth/user-not-found':
          alert('등록되지 않은 아이디 입니다.');
          break;
        case 'auth/wrong-password':
          alert('잘못된 패스워드 입니다.');
          break;
        default:
          break;
      }
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
          {errors.email && <span>이메일 형식이 맞지 않습니다.</span>}
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock name="email" type="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
        </SortBlock>
        <EmailandPasswordText>
          Password
          {errors.password && errors.password.type === 'required' && <span>올바른 비밀번호가 아닙니다.</span>}
          {errors.password && errors.password.type === 'minLength' && <span>비밀번호의 길이가 밎지 않습니다.</span>}
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock name="password" type="password" ref={register({ required: true, minLength: 6 })} />
        </SortBlock>

        <SortBlock>
          <LoginButton type="submit" disabled={loading}>
            로그인
          </LoginButton>
        </SortBlock>

        <SortBlock>
          <Link to="/signup">
            <RegisterButton>회원가입</RegisterButton>
          </Link>
        </SortBlock>
      </form>
      <MenuBar />
    </>
  );
};

export default LoginPage;

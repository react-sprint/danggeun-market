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
      <TopBlock>
        <Link to="/">
          <BackImage />
        </Link>

        <p>로그인</p>
      </TopBlock>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailandPasswordText>
          Email
          <div>{errors.email && <>이메일 형식이 맞지 않습니다.</>}</div>
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
          <div>
            {errors.password && errors.password.type === 'required' && (
              <>올바른 비밀번호가 아닙니다.</>
            )}
          </div>
          <div>
            {errors.password && errors.password.type === 'minLength' && (
              <>비밀번호의 길이가 밎지 않습니다.</>
            )}
          </div>
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6 })}
          />
        </SortBlock>

        {errorFromSubmit && <p>로그인 실패</p>}

        <LoginButton type="submit" disabled={loading}>
          로그인
        </LoginButton>

        <Link to="/signup">
          <RegisterButton>회원가입</RegisterButton>
        </Link>

        <MenuBar />
      </form>
    </>
  );
};

export default LoginPage;

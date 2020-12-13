import React, { useState, useRef } from 'react';
import md5 from 'md5';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import {
  TopBlock,
  BackImage,
  EmailandPasswordBlock,
  EmailandPasswordText,
  RegisterButton,
} from '../components/layout/LoginLayout';
import { SortBlock } from '../components/common/SortBlock';

const SignUpPage = () => {
  const { register, watch, errors, handleSubmit } = useForm();
  const [errorFormSubmit, setErrorFormSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch('password');

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      console.log('createdUser', createdUser);

      await createdUser.user.updateProfile({
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email,
        )}?d=identicon`,
      });

      // Firebase 데이터베이스에 저장하기
      await firebase.database().ref('users').child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });

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
      <TopBlock>
        <Link to="/">
          <BackImage />
        </Link>
        <p>회원가입</p>
      </TopBlock>

      <form onSubmit={handleSubmit(onSubmit)}>
        <EmailandPasswordText>
          Email
          <p>{errors.email && <>잘못된 이메일 입니다.</>}</p>
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
            <p>잘못된 비밀번호 입니다.</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p>비밀번호 길이가 맞지 않습니다.</p>
          )}
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6 })}
          />
        </SortBlock>
        <EmailandPasswordText>
          PasswordConfirm
          {errors.password_confirm &&
            errors.password_confirm.type === 'required' && (
              <p>잘못된 비밀번호 입니다.</p>
            )}
          {errors.password_confirm &&
            errors.password_confirm.type === 'validate' && (
              <p>비밀번호가 일치하지 않습니다.</p>
            )}
        </EmailandPasswordText>
        <SortBlock>
          <EmailandPasswordBlock
            name="password_confirm"
            type="password"
            ref={register({
              required: true,
              validate: (value) => value === password.current,
            })}
          />
        </SortBlock>

        <SortBlock>
          <RegisterButton type="submit" disabled={loading}>
            회원가입
          </RegisterButton>
        </SortBlock>
      </form>
      <MenuBar />
    </>
  );
};

export default SignUpPage;

import React, { useState, useRef } from 'react';
import md5 from 'md5';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import {
  BackImage,
  TopBlock,
  TopText,
  IdText,
  EmailBlock,
  PasswordText,
  PasswordBlock,
  RegisterButton,
  RegisterText,
  PasswordConfirmText,
  PasswordConfirmBlock,
} from '../styles/RegisterStyle';

const RegisterPage = () => {
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
      console.log(createdUser);

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
      <Link to="/">
        <BackImage />
      </Link>
      <TopBlock />
      <TopText>회원가입</TopText>
      <IdText>Email</IdText>
      <EmailBlock
        name="email"
        type="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This email false</p>}
      <PasswordText>Password</PasswordText>
      <PasswordBlock
        name="password"
        type="password"
        ref={register({ required: true, minLength: 6 })}
      />
      {errors.password && errors.password.type === 'required' && (
        <p>This password field is required</p>
      )}{' '}
      {errors.password && errors.password.type === 'minLength' && (
        <p>his password Input min length</p>
      )}
      <PasswordConfirmText>PasswordConfirm</PasswordConfirmText>
      <PasswordConfirmBlock
        name="password_confirm"
        type="password"
        ref={register({
          required: true,
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm &&
        errors.password_confirm.type === 'required' && (
          <p>This password is required</p>
        )}
      {errors.password_confirm &&
        errors.password_confirm.type === 'validate' && (
          <p>This password is required</p>
        )}
      {errorFormSubmit && <p>{errorFormSubmit}</p>}
      <RegisterText>계정을 만들어 당근마켓을 이용해보세요</RegisterText>
      <Link to="/login">
        <RegisterButton>
          <p>회원가입</p>
        </RegisterButton>
      </Link>
      <MenuBar />
    </>
  );
};

export default RegisterPage;

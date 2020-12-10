import React, { useState, useRef } from 'react';
import md5 from 'md5';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import {
  TopBlock,
  BackImage,
  EmailBlock,
  EmailText,
  PasswordText,
  PasswordBlock,
} from '../components/layout/LoginLayout';
import {
  PasswordConfirmText,
  PasswordConfirmBlock,
  RegisterButton,
} from '../styles/SignUpStyle';

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
        <EmailText>
          Email
          <div>{errors.email && <>잘못된 이메일 입니다.</>}</div>
        </EmailText>
        <EmailBlock
          name="email"
          type="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <PasswordText>
          Password
          <div>
            {errors.password && errors.password.type === 'required' && (
              <>잘못된 비밀번호 입니다.</>
            )}
          </div>
          <div>
            {errors.password && errors.password.type === 'minLength' && (
              <>비밀번호 길이가 맞지 않습니다.</>
            )}
          </div>
        </PasswordText>
        <PasswordBlock
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />
        <PasswordConfirmText>
          PasswordConfirm
          <div>
            {errors.password_confirm &&
              errors.password_confirm.type === 'required' && (
                <>잘못된 비밀번호 입니다.</>
              )}
          </div>
          <div>
            {errors.password_confirm &&
              errors.password_confirm.type === 'validate' && (
                <>비밀번호가 일치하지 않습니다.</>
              )}
          </div>
        </PasswordConfirmText>
        <PasswordConfirmBlock
          name="password_confirm"
          type="password"
          ref={register({
            required: true,
            validate: (value) => value === password.current,
          })}
        />

        <div>{errorFormSubmit && <>{errorFormSubmit}</>}</div>
        <RegisterButton type="submit" disabled={loading}>
          회원가입
        </RegisterButton>
        <MenuBar />
      </form>
    </>
  );
};

export default SignUpPage;

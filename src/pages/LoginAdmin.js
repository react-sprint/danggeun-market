import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './LoginPage';
import RegisterPage from './SingUp';

import firebase from '../utils/api/fbInstance';
import { setUser } from '../modules/user';

const LoginAdmin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user', user);
      // 로그인이 된 상태
      if (user) {
        history.push('/');
        dispatch(setUser(user));
      } else {
        history.push('/login');
      }
    });
  });

  if (!isLoading) {
    return <div>...loading</div>;
  }
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/singup" component={RegisterPage} />
    </Switch>
  );
};

export default LoginAdmin;

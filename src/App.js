import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import WritingStuff from './pages/WritingStuff';
import MainList from './pages/MainList';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import SalePage from './pages/SalePage';
import AttentionPage from './pages/Attention';
import MyDanggeun from './pages/MyDanggeun';
import ProfileEdit from './pages/ProfileEdit';
import MenuBar from './components/common/MenuBar';
import ProfilePage from './pages/ProfilePage';
import { setUser } from './modules/user';
import firebase from './utils/api/fbInstance';
import Gps from './pages/Gps';
import StuffDetail from './pages/StuffDetail';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // 로그인이 된 상태
      if (user) {
        history.push('/');
        dispatch(setUser(user));
      } else {
        // history.push('/login');
      }
    });
  });

  return (
    <Switch>
      <Route path="/write-new-stuff" component={WritingStuff} />
      <Route exact path="/" component={MainList} />
      <Route path="/stuff-detail" component={StuffDetail} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/sale" component={SalePage} />
      <Route exact path="/attention" component={AttentionPage} />
      <Route exact path="/gps" component={Gps} />
      <Route exact path="/mydanggeun" component={MyDanggeun} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/profileedit" component={ProfileEdit} />
      <MenuBar />
    </Switch>
  );
};

export default App;

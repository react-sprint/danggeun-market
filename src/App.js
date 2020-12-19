import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WritingStuff from './pages/WritingStuff';
import MainList from './pages/MainList';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import SalePage from './pages/SalePage';
import MyDanggeun from './pages/MyDanggeun';
import ProfileEdit from './pages/ProfileEdit';
import MenuBar from './components/common/MenuBar';
import ProfilePage from './pages/ProfilePage';
import { setUser } from './modules/user';
import { changeName } from './modules/profile';
import firebase from './utils/api/fbInstance';
import Gps from './pages/Gps';
import StuffDetail from './pages/StuffDetail';
import Filter from './pages/Filter';
import Search from './pages/Search';
import Category from './pages/Category';
import SearchResult from './pages/SearchResult';

const App = () => {
  const [filterMail, setFilterMail] = useState('익명이');
  const history = useHistory();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.currentUser?.email);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // 로그인이 된 상태
      if (user) {
        dispatch(setUser(user));
        if (userEmail) {
          const uidRegex = /(.*?)[@]/g.exec(userEmail)[0].replace(/@/gi, '');
          setFilterMail(uidRegex);
        }
        dispatch(changeName(filterMail));
      } else {
        history.push('/login');
        dispatch(setUser(null));
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
      <Route exact path="/gps" component={Gps} />
      <Route exact path="/mydanggeun" component={MyDanggeun} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/profileedit" component={ProfileEdit} />
      <Route exact path="/filter" component={Filter} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/category/:category" component={Category} />
      <Route exact path="/searchresult" component={SearchResult} />
      <MenuBar />
    </Switch>
  );
};

export default App;

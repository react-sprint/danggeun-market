import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Templates from './pages/Templates';
import WritingStuff from './pages/WritingStuff';
import MainList from './pages/MainList';
import LoginPage from './pages/LoginPage';
import SingUpPage from './pages/SingUp';
import SalePage from './pages/SalePage';
import AttentionPage from './pages/Attention';
import Gps from './pages/Gps';
import MyDanggeun from './pages/MyDanggeun';
import ProfileEdit from './pages/ProfileEdit';
import MenuBar from './components/common/MenuBar';
import { Layout } from './styles/Layout';
import ProfilePage from './pages/ProfilePage';
import { setUser } from './modules/user';
import firebase from './utils/api/fbInstance';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // 로그인이 된 상태
      if (user) {
        history.push('/');
        dispatch(setUser(user));
      } else {
        history.push('/login');
      }
    });
  }, [dispatch, history]);

  // if (!isLoading) {
  //   return <div>...loading</div>;
  // }
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={MainList} />
        <Route path="/write-new-stuff" component={WritingStuff} />
        <Route path="/templater" component={Templates} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SingUpPage} />
        <Route exact path="/sale" component={SalePage} />
        <Route exact path="/attention" component={AttentionPage} />
        <Route exact path="/write" component={WritingStuff} />
        <Route exact path="/gps" component={Gps} />
        <Route exact path="/mydanggeun" component={MyDanggeun} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/profileedit" component={ProfileEdit} />

        <MenuBar />
      </Layout>
    </Switch>
  );
};

export default App;

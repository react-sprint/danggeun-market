import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Templates from './pages/Templates';
import WritingStuff from './pages/WritingStuff';
import MainList from './pages/MainList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
<<<<<<< HEAD
=======
import ProfilePage from './pages/ProfilePage';
import ProfileModifyPage from './pages/ProfileModifyPage';
>>>>>>> profile-redux-flow
import SalePage from './pages/SalePage';
import AttentionPage from './pages/Attention';
import Gps from './pages/Gps';
import MyDanggeun from './pages/MyDanggeun';
<<<<<<< HEAD
import ProfileEdit from './pages/ProfileEdit';
import MenuBar from './components/common/MenuBar';
import { Layout } from './styles/Layout';
import ProfilePage from './pages/ProfilePage';
=======
import ProfilePageV2 from './pages/ProfilePageV2';
import ProfileEdit from './pages/ProfileEdit';
>>>>>>> profile-redux-flow

const App = () => {
  return (
    <Switch>
<<<<<<< HEAD
      <Layout>
        <Route exact path="/" component={MainList} />
        <Route path="/write-new-stuff" component={WritingStuff} />
        <Route path="/templater" component={Templates} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/sale" component={SalePage} />
        <Route exact path="/attention" component={AttentionPage} />
        <Route exact path="/write" component={WritingStuff} />
        <Route exact path="/gps" component={Gps} />
        <Route exact path="/mydanggeun" component={MyDanggeun} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/profiledit" component={ProfileEdit} />

        <MenuBar />
      </Layout>
=======
      <Route exact path="/" component={MainList} />
      <Route path="/write-new-stuff" component={WritingStuff} />
      <Route path="/templater" component={Templates} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/profilemodify" component={ProfileModifyPage} />
      <Route exact path="/sale" component={SalePage} />
      <Route exact path="/attention" component={AttentionPage} />
      <Route exact path="/write" component={WritingStuff} />
      <Route exact path="/gps" component={Gps} />
      <Route exact path="/mydanggeun" component={MyDanggeun} />
      <Route exact path="/profilev2" component={ProfilePageV2} />
      <Route exact path="/profileedit" component={ProfileEdit} />
>>>>>>> profile-redux-flow
    </Switch>
  );
};

export default App;

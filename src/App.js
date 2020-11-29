import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Templates from './pages/Templates';
import WritingStuff from './pages/WritingStuff';
import MainList from './pages/MainList';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import ProfilePage from './profile/ProfilePage';
import ProfileModifyPage from './profile/ProfileModifyPage';
import SalePage from './pages/SalePage';
import AttentionPage from './pages/Attention';
import Gps from './pages/Gps';

const App = () => {
  return (
    <Switch>
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
    </Switch>
  );
};

export default App;

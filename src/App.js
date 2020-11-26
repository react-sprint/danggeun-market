import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Templates from './pages/Templates';
import WritingStuff from './pages/WritingStuff';
import MainList from './pages/MainList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainList} />
        <Route path="/write-new-stuff" component={WritingStuff} />
        <Route path="/templater" component={Templates} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

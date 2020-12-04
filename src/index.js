import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ResetStyles from './resetStyle/ResetStyles';

ReactDOM.render(
  <>
    <ResetStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);

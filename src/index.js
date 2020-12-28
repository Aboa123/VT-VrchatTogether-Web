import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/material.css';
import 'antd/dist/antd.css';
import './js/material.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

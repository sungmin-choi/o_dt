import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Kakao from './service/kakao';
const kakao = new Kakao()
ReactDOM.render(
  <React.StrictMode>
    <App Kakao={kakao}/>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Kakao from './service/kakao';
import Scraper from './service/scraper';
const kakao = new Kakao();
const scraper = new Scraper();


ReactDOM.render(
  <React.StrictMode>
    <App Kakao={kakao} scraper={scraper} />
  </React.StrictMode>,
  document.getElementById('root')
);

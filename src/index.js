import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import dva from 'dva';

const createHistory = require('history').createBrowserHistory;

const app = dva({
  history: createHistory(),
});

// app.model(require('./models/home'));

app.router(require('./router').default);

const APP = app.start();
ReactDOM.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 检测网站性能
// reportWebVitals(console.log);

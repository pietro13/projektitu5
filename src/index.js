import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './View/App';
import reportWebVitals from './reportWebVitals';

import AppController from "./Controller/AppController";

var Controller = new AppController();



localStorage.setItem("all",JSON.stringify([-1,-1,-1,[[["0"]]],[] ]));

ReactDOM.render(
  <React.StrictMode>
    <App controller={Controller} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

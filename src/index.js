import React,{useContext,Profiler} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {Portal} from './Advanced/11-Portals/App'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(
  <>
<Portal></Portal>
    
  </>,
  document.getElementById("root")
);
reportWebVitals();

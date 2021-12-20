import React,{useContext,Profiler} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {ComponentWithProfiling} from './Advanced/12-Profiler/App'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(
  <>

  <ComponentWithProfiling/>
    
  </>,
  document.getElementById("root")
);
reportWebVitals();

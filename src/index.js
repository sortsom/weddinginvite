import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  Dashboard  from './dashboard';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dashboard/>
    {/* <Appnavbar/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);

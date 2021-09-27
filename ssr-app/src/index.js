import 'bootstrap/scss/bootstrap.scss';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

ReactDOM.hydrate(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
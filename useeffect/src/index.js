import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Usememo from './Usememo';
import FetchApi from './FetchApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Usememo/>
    <FetchApi/>
  </React.StrictMode>
);



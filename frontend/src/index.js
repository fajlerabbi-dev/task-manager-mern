import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';
import { BrowserRouter } from 'react-router-dom';
import MasterLayout from './components/MasterLayout/MasterLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MasterLayout>
        <App />
      </MasterLayout>
    </BrowserRouter>
  </React.StrictMode>
);

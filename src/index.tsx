import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-awesome-lightbox/build/style.css";
import './index.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

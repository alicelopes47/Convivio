//@ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './App';
import "yet-another-react-lightbox/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
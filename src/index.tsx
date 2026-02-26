import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './moks/offers';

// const CARDS_COUNT = 7;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
//уточнить место для Header!
root.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
);

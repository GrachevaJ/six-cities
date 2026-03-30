import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './moks/offers';
import city from './moks/city';
import reviews from './moks/reviews';

// const CARDS_COUNT = 7;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App city={city} offers={offers} reviews={reviews}/>
  </React.StrictMode>,
);

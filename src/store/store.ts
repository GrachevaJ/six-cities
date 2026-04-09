import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setOffers, setReviews } from './action';
import offers from '../moks/offers';
import reviews from '../moks/reviews';


const store = configureStore({
  reducer
});

store.dispatch(setOffers(offers));
store.dispatch(setReviews(reviews));


export default store;

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// import { setOffers, setReviews } from './action';
import { createAPI } from '../components/api/api';
import { fetchOffers } from './action';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

// store.dispatch(setOffers(offers));
// store.dispatch(setReviews(reviews));
store.dispatch(fetchOffers());

export default store;

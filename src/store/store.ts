import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { createAPI } from '../components/api/api';
import { fetchOffers, fetchUserStatus } from './action';
import history from '../components/history/history';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;

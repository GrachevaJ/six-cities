import { createReducer } from '@reduxjs/toolkit';
import type {City, Offer, Comment, SortName, User} from '../types/types';
import { setCity, fetchOffers, setReviews, setSorting, fetchUserStatus } from './action';
import { cities, CityLocation, Sorting, AuthorizationStatus } from '../const';

type State = {
  city: City,
  offers: Offer[],
  reviews: Comment[],
  sorting: SortName,
  isOffersLoading: boolean,
  authorizationStatus: AuthorizationStatus;
  user: User['email'],
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  reviews: [],
  sorting: Sorting.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

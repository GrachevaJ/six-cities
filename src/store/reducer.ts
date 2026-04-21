import { createReducer } from '@reduxjs/toolkit';
import type {City, Offer, Comment, SortName} from '../types/types';
import { setCity, fetchOffers, setReviews, setSorting } from './action';
import { cities, CityLocation, Sorting } from '../const';

type State = {
  city: City,
  offers: Offer[],
  reviews: Comment[],
  sorting: SortName,
  isOffersLoading: boolean,
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
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(fetchOffers.pending, (state, action) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state, action) => {
      state.isOffersLoading = false;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

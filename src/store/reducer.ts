import { createReducer } from '@reduxjs/toolkit';
import type {City, Offer, Comment, SortName} from '../types/types';
import { setCity, setOffers, setReviews, setSorting } from './action';
import { cities, CityLocation, Sorting } from '../const';

type State = {
  city: City,
  offers: Offer[],
  reviews: Comment[],
  sorting: SortName
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  reviews: [],
  sorting: Sorting.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

import { createReducer } from '@reduxjs/toolkit';
import type {City, Offer, Comment, SortName, User} from '../types/types';
import { setCity, fetchOffers, setSorting, fetchUserStatus, fetchOffer, fetchNearbyOffers, fetchComments, postComment } from './action';
import { cities, CityLocation, Sorting, AuthorizationStatus } from '../const';

type State = {
  city: City,
  offers: Offer[],
  comments: Comment[],
  sorting: SortName,
  isOffersLoading: boolean,
  authorizationStatus: AuthorizationStatus,
  user: User['email'],
  offer: Offer | null,
  isOfferLoading: boolean,
  nearbyOffers: Offer[],
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  comments: [],
  sorting: Sorting.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
  offer: null,
  isOfferLoading: false,
  nearbyOffers: [],
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
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
});

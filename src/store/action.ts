import { createAction } from '@reduxjs/toolkit';
import { CityName, Offer, Comment, SortName } from '../types/types';

export const Action = {
  SET_CITY: 'sity/set',
  SET_OFFERS: 'offers/set',
  SET_REVIEWS: 'reviews/set',
  SET_SORTING: 'sorting/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setReviews = createAction<Comment[]>(Action.SET_REVIEWS);
export const setSorting = createAction<SortName>(Action.SET_SORTING);

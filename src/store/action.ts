import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import { CityName, Offer, Comment, SortName } from '../types/types';
import { ApiRoute } from '../const';

export const Action = {
  SET_CITY: 'sity/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_REVIEWS: 'reviews/set',
  SET_SORTING: 'sorting/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);

export const setReviews = createAction<Comment[]>(Action.SET_REVIEWS);
export const setSorting = createAction<SortName>(Action.SET_SORTING);

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (__, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  }
);

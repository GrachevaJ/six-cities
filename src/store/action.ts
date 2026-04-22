import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import { CityName, Offer, Comment, SortName, User } from '../types/types';
import { ApiRoute } from '../const';

export const Action = {
  SET_CITY: 'sity/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_REVIEWS: 'reviews/set',
  SET_SORTING: 'sorting/set',
  FETCH_USER_STATUS: 'user/fetch-status'
};

export const setCity = createAction<CityName>(Action.SET_CITY);

export const setReviews = createAction<Comment[]>(Action.SET_REVIEWS);
export const setSorting = createAction<SortName>(Action.SET_SORTING);

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  }
);

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, {extra: api}) => {
    const {data} = await api.get<User>(ApiRoute.Login);

    return data;
  }
);

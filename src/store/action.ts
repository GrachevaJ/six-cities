import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError, AxiosInstance } from 'axios';
import { CityName, Offer, Comment, SortName, User, UserAuth, CommentAuth } from '../types/types';
import { ApiRoute, AppRoute, HttpCode } from '../const';
import { Token } from '../utils';
import { History } from 'history';

type Extra = {
  api: AxiosInstance,
  history: History
}

export const Action = {
  SET_CITY: 'sity/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  FETCH_OFFER: 'offer/fetch',
  FETCH_NEARBY_OFFERS: 'offers/fetch-nearby',
  FETCH_COMMENTS: 'offer/fetch-comments',
  POST_COMMENT: 'offer/post-comment',
};

export const setCity = createAction<CityName>(Action.SET_CITY);

export const setSorting = createAction<SortName>(Action.SET_SORTING);

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: Extra}>(
  Action.FETCH_OFFERS,
  async (_, { extra}) => {
    const {api} = extra;
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  }
);

export const fetchUserStatus = createAsyncThunk<User, undefined, {extra: Extra}>(
  Action.FETCH_USER_STATUS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<User>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, {extra: Extra}>(
  Action.LOGIN_USER,
  async ({email, password}, {extra}) => {
    const {api, history} = extra;
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    const {token} = data;

    Token.save(token);
    history.push(AppRoute.Main);

    return email;
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], {extra: Extra}>(
  Action.FETCH_OFFER,
  async(id, {extra}) => {
    const {api, history} = extra;
    try {
      const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(error);
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], Offer['id'], {extra: Extra}>(
  Action.FETCH_NEARBY_OFFERS,
  async (id, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);

    return data;
  }
);

export const fetchComments = createAsyncThunk<Comment[], Offer['id'], { extra: Extra }>(
  Action.FETCH_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const postComment = createAsyncThunk<Comment[], CommentAuth, {extra: Extra}>(
  Action.POST_COMMENT,
  async ({id, comment, rating}, {extra}) => {
    const {api} = extra;
    const {data} = await api.post<Comment[]>(`${ApiRoute.Comments}/${id}`, {comment, rating});

    return data;
  }
);

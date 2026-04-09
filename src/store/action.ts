import { createAction } from '@reduxjs/toolkit';
import { CityName, Offer } from '../types/types';

export const Action = {
  SET_CITY: 'sity/set',
  SET_OFFERS: 'offers/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);

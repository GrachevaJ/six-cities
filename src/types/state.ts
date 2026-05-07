import { AuthorizationStatus } from '../const';
import store from '../store/store';
import { Offer, Comment, City, SortName, User } from './types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SiteData = {
  offers: Offer[];
  isOffersLoading: boolean;
  offer: Offer | null;
  isOfferLoading: boolean;
  nearbyOffers: Offer[];
  comments: Comment[];
  favoriteOffers: Offer[];
  isFavoriteOffersLoading: boolean;
};

export type SiteProcess = {
  city: City;
  sorting: SortName;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
};


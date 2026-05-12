import type { Offer, User, Comment } from '../../types/types';
import { siteData } from './site-data';
import { cities, CityLocation } from '../../const';
import { fetchComments, fetchFavoriteOffers, fetchNearbyOffers, fetchOffer, fetchOffers, postComment, postFavorite } from '../action';

const user: User = {
  id: 1,
  name: 'Max',
  avatarUrl: 'img/user-1.jpg',
  isPro: false,
  email: 'max@gmail.com',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
};

const offers: Offer[] = [{
  id: 1,
  price: 370,
  title: 'Offer 1',
  rating: 3.0,
  type: 'room',
  isPremium: true,
  isFavorite: false,
  location: CityLocation[cities[0]],
  previewImage: 'img/1.jpg',
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  bedrooms: 2,
  description: 'Good room',
  goods: ['wi-fi', 'dish washer'],
  host: user,
  images: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'],
  maxAdults: 2
}];

const comments: Comment[] = [{
  id: 1,
  comment: 'Hi!',
  date: '12-05-2026',
  rating: 2.0,
  user: user
}];

const state = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  nearbyOffers: [],
  comments: [],
};

describe('Reducer: siteData', () => {
  it('without additional parameters should return initial state', () => {
    expect(siteData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch offers', () => {
    expect(siteData.reducer(state, {type: fetchOffers.pending.type}))
      .toEqual({
        offers: [],
        isOffersLoading: true,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, {type: fetchOffers.fulfilled.type, payload: offers}))
      .toEqual({
        offers: offers,
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, {type: fetchOffers.rejected.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch offer', () => {
    expect(siteData.reducer(state, {type: fetchOffer.pending.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: true,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, {type: fetchOffer.fulfilled.type, payload: offers[0]}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: offers[0],
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, {type: fetchOffer.rejected.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch nearby offers', () => {
    expect(siteData.reducer(state, {type: fetchNearbyOffers.fulfilled.type, payload: offers}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: offers,
        comments: [],
      });
  });

  it('should fetch comments', () => {
    expect(siteData.reducer(state, {type: fetchComments.fulfilled.type, payload: comments}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments,
      });
  });

  it('should post comment', () => {
    expect(siteData.reducer(state, {type: postComment.fulfilled.type, payload: comments}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments,
      });
  });

  it('should fetch favorite offers', () => {
    expect(siteData.reducer(state, {type: fetchFavoriteOffers.pending}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: true,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, {type: fetchFavoriteOffers.fulfilled.type, payload: offers}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: offers,
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(state, {type: fetchFavoriteOffers.rejected.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should post favorite offers', () => {
    const stateForFavorite = {
      offers,
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [] as Offer[],
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(stateForFavorite, {type: postFavorite.fulfilled.type, payload: {...offers[0], isFavorite: true} }))
      .toEqual({
        ...stateForFavorite,
        offers: [{...offers[0], isFavorite: true}],
        favoriteOffers: [{...offers[0], isFavorite: true}],
      });

    stateForFavorite.offers = [{...offers[0], isFavorite: true }];
    stateForFavorite.favoriteOffers = [{...offers[0], isFavorite: true }];

    expect(siteData.reducer(stateForFavorite, {type: postFavorite.fulfilled.type, payload: {...offers[0], isFavorite: false} }))
      .toEqual({
        offers,
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });
});

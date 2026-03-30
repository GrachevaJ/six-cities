import { cities } from '../const';

export type CityName = typeof cities[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: CityName;
  location: Location;
}

export type Offer = {
  id: number;
  price: number;
  title: string;
  rating: number;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  isPremium: boolean;
  isFavorite: boolean;
  location: Location;
  previewImage: string;
  city: {
    name: CityName;
  }
};

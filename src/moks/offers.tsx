import type { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    price: 550,
    title: 'Eric Vökel Boutique Apartments - Amsterdam Suites',
    rating: 4,
    type: 'apartment',
    isPremium: true,
    isFavorite: true,
    previewImage: '../img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
    }
  },
  {
    id: 2,
    price: 350,
    title: 'EasyHotel Amsterdam Arena Boulevard',
    rating: 3,
    type: 'hotel',
    isPremium: true,
    isFavorite: false,
    previewImage: '../img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
    }
  },
  {
    id: 3,
    price: 770,
    title: 'Yays Amsterdam Salthouse Canal By Numa',
    rating: 5,
    type: 'house',
    isPremium: true,
    isFavorite: true,
    previewImage: '../img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
    }
  },
  {
    id: 4,
    price: 321,
    title: 'CityPark Apartment Suit',
    rating: 2,
    type: 'room',
    isPremium: false,
    isFavorite: false,
    previewImage: '../img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
    }
  }
];

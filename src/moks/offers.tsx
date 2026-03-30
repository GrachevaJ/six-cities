import type { Offer } from '../types/types';

const offers: Offer[] = [
  {
    id: 1,
    price: 550,
    title: 'Eric Vökel Boutique Apartments - Amsterdam Suites',
    rating: 4,
    type: 'apartment',
    isPremium: true,
    isFavorite: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    previewImage: '../img/apartment-02.jpg',
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
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
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
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
    previewImage: '../img/apartment-01.jpg',
    city: {
      name: 'Paris',
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
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    },
    previewImage: '../img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
    }
  }
];

export default offers;

export type Offer = {
  id: number;
  price: number;
  title: string;
  rating: number;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  isPremiun: boolean;
  isFavorite: boolean;
  previewImage: string;
  city: {
    name: string;
  }
};

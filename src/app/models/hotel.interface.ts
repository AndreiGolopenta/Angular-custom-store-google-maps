interface Contact {
  icon: string;
  info: string;
}

export interface Hotel {
  id: number;
  favourites: boolean;
  name: string;
  image: {
    link: string;
    top: string;
  };
  stars: number;
  latitude: number;
  longitude: number;
  reviewsNumber: number;
  ratingNumber: number;
  contact: Contact[];
}

export interface ModelFavorite {
  idUser: string;
  favorite: boolean;
}

export interface ModelPost {
  iudUser: string;
  nameUser: string;
  imgUser: string;
  emailUser: string;
  title: string;
  seasonType: string;
  foodType: string;
  img: string;
  description: string;
  favoritesCollection: ModelFavorite[];
  date: string;
  time: string;
}

export interface ModelPublic extends ModelPost {
  id: string;
}
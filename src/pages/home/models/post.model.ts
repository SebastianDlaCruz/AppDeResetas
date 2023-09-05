export interface ModelFavorite {
  idUser: string;
  favorite: boolean;
}

export interface ModelPost {
  iudUser: string;
  nameUser: string;
  imgUser: string;
  emailUser: string;
  favorite: boolean;
  img: string;
  description: string;
  favoritesCollection: ModelFavorite[];
}
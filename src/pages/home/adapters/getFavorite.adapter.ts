import { ModelFavorite } from "../models/post.model";
export const getFavorite = (favoriteData: ModelFavorite[], iudUser: string) => {
  const response = favoriteData.find(favorite => favorite.idUser === iudUser);
  if (response) {
    return response.favorite
  } else {
    return false
  }

}
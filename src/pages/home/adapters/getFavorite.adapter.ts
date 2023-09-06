import { ModelPublic } from "../components/Publications/Publications";
import { ModelFavorite } from "../models/post.model";
export const getFavorite = (favoriteData: ModelFavorite[], idUser: string) => {
  const response = favoriteData.find(favorite => favorite.idUser === idUser);
  if (response) {
    return response.favorite
  } else {
    return false
  }

}

export const getFavoriteLength = (data: ModelPublic[], idUser: string) => {
  const response = data.filter(item => {
    if (item.favoritesCollection.some(favorite => favorite.idUser === idUser && favorite.favorite)) {
      return item.favoritesCollection
    }
  })

  return response.length;
}
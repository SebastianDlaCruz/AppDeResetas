import { StarIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useUserContext } from "@context/index";
import useGetData from "@hook/useGetData/useGetData";
import { ModelFavorite, ModelPost } from "@pages/home/models/post.model";
import { setFavorite } from "@pages/home/services/setFavorite/setFavorite";

interface Props {
  id: string;
  favorite: boolean;
  post: ModelPost;
}

export const ButtonStart = ({ id, post, favorite }: Props) => {

  const { documentInfo } = useGetData<ModelFavorite>({ nameDoc: "Favoritos" });
  const { user } = useUserContext();
  const handleFavorite = (id: string, post: ModelPost) => {
    console.log(post.favoritesCollection.length === 0 || post.favoritesCollection.some(item => item.idUser !== user.uid));
    if (post.favoritesCollection.length === 0
      || post.favoritesCollection.some(item => item.idUser !== user.uid)) {
      post.favoritesCollection.push({ idUser: user.uid, favorite: true });
      setFavorite(id, post);
    }

  }

  return (
    <Button as={StarIcon} position={"absolute"} insetBlockStart={"0%"}
      insetInlineEnd={"2%"} onClick={() => handleFavorite(id, post)}
      _hover={{
        bg: 'none',
        color: (favorite) ? 'black' : 'yellow.500'
      }} bg={"none"}
      color={favorite ? 'yellow.500' : ''} boxSize={"49px"} />
  )
}

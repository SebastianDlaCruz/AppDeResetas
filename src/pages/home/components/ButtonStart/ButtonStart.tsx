import { StarIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { ModelPost } from "@pages/home/models/post.model";
import { setFavorite } from "@pages/home/services/setFavorite/setFavorite";


interface Props {
  id: string;
  favorite: boolean;
  post: ModelPost;
}

export const ButtonStart = ({ favorite, id, post }: Props) => {

  const handleFavorite = (id: string, post: ModelPost) => {
    const getFavorite = !favorite;
    setFavorite(id, getFavorite, post)
  }
  return (
    <Button as={StarIcon} position={"absolute"} insetBlockStart={"0%"}
      insetInlineEnd={"2%"} onClick={() => handleFavorite(id, post)}
      _hover={{
        bg: 'none',
        color: 'yellow.500'
      }} bg={"none"}
      color={favorite ? 'yellow.500' : ''} boxSize={"49px"} />
  )
}

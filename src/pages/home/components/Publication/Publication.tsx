import { Box, Image, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import { useUserContext } from "@context/index";
import { getFavorite } from "@pages/home/adapters/getFavorite.adapter";
import useSetDataPost from "@pages/home/hook/useSetDataPost/useSetDataPost";
import { ButtonStart } from "../ButtonStart/ButtonStart";
import ContainerImgProfile from "../ContainerImgProfile/ContainerImgProfile";
import ContainerComment from "../ContinerComment/ContainerComment";
import FormComment from "../FormComment/FormComment";
import { ModelPublic } from "../Publications/Publications";

interface Props {
  isSuccess: boolean;
  data: ModelPublic[];
  isLoading: boolean;
}

const Publication = ({ isSuccess, data, isLoading }: Props) => {

  const { user } = useUserContext();
  useSetDataPost(data, user);

  if (!isSuccess) return (
    <Box w={"769px"} minH="360px" padding="6px" bgColor={"gray.300"} borderRadius={"3px"}>
      <Skeleton height='40px' fadeDuration={1} isLoaded={isLoading} />
      <Skeleton height='200px' fadeDuration={1} isLoaded={isLoading} marginBlockStart={"12px"} />
      <SkeletonText mt='4' height={"40px"} noOfLines={4} spacing='4' skeletonHeight='2' />
    </Box>
  );

  if (data.length === 0) {
    return (
      <Text fontSize={"40px"} fontWeight={"bold"} color="orange.800">Sin publicaciones😓</Text>
    )
  }


  return (
    <>
      {
        data.map((item, index) => (
          <Box as="article" key={index} position={"relative"} w={"769px"} minH="100%" bgColor={"gray.300"} padding={"12px"} borderRadius={"3px"}>
            <ButtonStart favorite={getFavorite(item.favoritesCollection, user.uid)} id={item.id} post={item} />
            <ContainerImgProfile as={"header"} imgUser={item.imgUser} alt={item.nameUser}
              emailUser={item.emailUser} nameUser={item.nameUser} />
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap="32px" marginBlockStart={"14px"}>
              {item.img.trim() &&
                <Box w={"89%"} h="400px">
                  <Image src={item.img || '/assets/user.svg'} alt={item.description} w={"100%"} h="inherit" objectFit={"cover"} /></Box>}
              <Text>{item.description}</Text>
            </Box>

            <Box>
              <Text>Comentarios</Text>
              <ContainerComment idPost={item.id} />
            </Box>

            <Box as="footer">
              <FormComment idPost={item.id} />
            </Box>
          </Box>))
      }
    </>
  )
}

export default Publication;

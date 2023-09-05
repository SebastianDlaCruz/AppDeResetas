import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useUserContext } from "@context/index";
import useGetData from "@hook/useGetData/useGetData";
import { getFavorite } from "@pages/home/adapters/getFavorite.adapter";
import { ButtonStart } from "@pages/home/components/ButtonStart/ButtonStart";
import ContainerImgProfile from "@pages/home/components/ContainerImgProfile/ContainerImgProfile";
import ContainerComment from "@pages/home/components/ContinerComment/ContainerComment";
import FormComment from "@pages/home/components/FormComment/FormComment";
import { ModelPublic } from "@pages/home/components/Publications/Publications";
const Favorites = () => {
  const { user } = useUserContext();

  const { documentInfo, isLoading, isSuccess } = useGetData<ModelPublic>({ nameDoc: "Publicaciones" });

  return (
    <div>
      <Heading as="h2">Lista de publicaciones favoritas</Heading>
      {

        documentInfo.map((item, index) => {

          if (item.favoritesCollection.some(item => item.idUser === user.uid)) {
            return (
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
              </Box>
            )
          }
        })
      }
    </div>
  )
}

export default Favorites

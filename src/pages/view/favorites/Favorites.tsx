import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Publication from "@components/Publications/Publications";
import { useUserContext } from "@context/index";
import useGetData from "@hook/useGetData/useGetData";
import { ModelPublic } from "@pages/home";
import { getFavorite, getFavoriteLength } from "@pages/home/adapters/getFavorite.adapter";
import { ButtonStart } from "@pages/home/components/ButtonStart/ButtonStart";
import ContainerImgProfile from "@pages/home/components/ContainerImgProfile/ContainerImgProfile";
import ContainerComment from "@pages/home/components/ContinerComment/ContainerComment";
import FormComment from "@pages/home/components/FormComment/FormComment";

const Favorites = () => {
  const { user } = useUserContext();

  const { documentInfo, isLoading, isSuccess } = useGetData<ModelPublic>({ nameDoc: "Publicaciones" });

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap="40px" minH={"100vh"}>
      <Heading as="h2">Lista de publicaciones favoritas</Heading>
      <Publication dataLength={documentInfo.length} isLoading={isLoading} isSuccess={isSuccess} textError="Sin lista de favoritos marcados"
        dataLengthFavorite={getFavoriteLength(documentInfo, user.uid)}>
        {
          documentInfo.map((item, index) => {
            if (item.favoritesCollection.some(item => item.idUser === user.uid && item.favorite)) {
              return (
                <Box as="article" key={index} position={"relative"} w={"769px"} minH="100%" bgColor={"gray.300"} padding={"12px"} borderRadius={"3px"}>
                  <ButtonStart favorite={getFavorite(item.favoritesCollection, user.uid)} id={item.id} post={item} />
                  <ContainerImgProfile as={"header"} imgUser={item.imgUser} alt={item.nameUser}
                    emailUser={item.emailUser} nameUser={item.nameUser} date={item.date} />
                  <Heading as="h2" textAlign={"center"}>{item.title}</Heading>
                  <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap="32px" marginBlockStart={"14px"}>
                    {item.img.trim() &&
                      <Box w={"89%"} h="400px">
                        <Image src={item.img || '/assets/user.svg'} alt={item.description} w={"100%"} h="inherit" objectFit={"cover"} /></Box>}
                    <Text fontWeight={"bold"}>Tipo  de comida: <Text as="span" fontWeight={"medium"}>{item.foodType}</Text></Text>
                    <Text fontWeight={"bold"}>Tipo  de temporada: <Text as="span" fontWeight={"medium"}>{item.seasonType}</Text></Text>
                    <Text>{item.description}</Text>
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
      </Publication>
    </Box>
  )
}

export default Favorites

import { Box, Image, Text } from "@chakra-ui/react";
import useGetData from "@hook/useGetData/useGetData";
import { ModelPost } from "@pages/home/models/post.model";
/* import Publication from "../Publication/Publication"; */
import Publication from "@components/Publications/Publications";
import { useUserContext } from "@context/index";
import { getFavorite } from "@pages/home/adapters/getFavorite.adapter";
import useSetDataPost from "@pages/home/hook/useSetDataPost/useSetDataPost";
import { ButtonStart } from "../ButtonStart/ButtonStart";
import ContainerImgProfile from "../ContainerImgProfile/ContainerImgProfile";
import ContainerComment from "../ContinerComment/ContainerComment";
import FormComment from "../FormComment/FormComment";

export interface ModelPublic extends ModelPost {
  id: string;
}
/**Borrar */
const Publications = () => {
  const { user } = useUserContext();
  const { documentInfo, isLoading, isSuccess } = useGetData<ModelPublic>({ nameDoc: "Publicaciones" });
  useSetDataPost(documentInfo, user);
  return (
    <Box as="section" marginBlockStart={"22px"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap="34px">
      {/* <Publication data={documentInfo} isSuccess={isSuccess} isLoading={isLoading} /> */}
      <Publication dataLength={documentInfo.length} isLoading={isLoading} isSuccess={isSuccess} textError="Sin publicaciones😓">
        {
          documentInfo.map((item, index) => (
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
      </Publication>
    </Box >
  )
}

export default Publications

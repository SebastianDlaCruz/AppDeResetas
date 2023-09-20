import { Box, Text } from "@chakra-ui/react";
import { useUserContext } from "@context/index";
import useGetData from "@hook/useGetData/useGetData";
import useSetDataComment from "@pages/home/hook/useSetDataComment/useSetDataComment";
import { ModelCommentInfo } from "@pages/home/models/comment.model";
import ContainerImgProfile from "../ContainerImgProfile/ContainerImgProfile";
interface Props {
  idPost: string;
}


const ContainerComment = ({ idPost }: Props) => {

  const { user } = useUserContext();
  const { documentInfo, isSuccess } = useGetData<ModelCommentInfo>({ nameDoc: "Comentarios" });
  useSetDataComment(documentInfo, user);
  if (isSuccess) {
    return (
      <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
        {
          documentInfo.map((item, key) => {
            if (item.idPost === idPost) {
              return (
                <Box key={key} bgColor={"gray.200"} padding={"14px"}>
                  <ContainerImgProfile as={"div"} emailUser={item.emailUser}
                    nameUser={item.nameUser} imgUser={item.imgUser} alt={item.nameUser} date={item.date} />
                  <Text color={"blackAlpha.900"} fontSize={"1rem"}>{item.comment}</Text>
                </Box>)
            }

          }
          )
        }
      </Box>
    )

  } else {
    return (null)
  }



}

export default ContainerComment

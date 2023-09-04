import { Box } from "@chakra-ui/react";
import useGetData from "@hook/useGetData/useGetData";
import { ModelPost } from "@pages/home/models/post.model";
import Publication from "../Publication/Publication";

export interface ModelPublic extends ModelPost {
  id: string;
}

const Publications = () => {

  const { documentInfo, isLoading, isSuccess } = useGetData<ModelPublic>({ nameDoc: "Publicaciones" });

  return (
    <Box as="section" marginBlockStart={"22px"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap="34px">
      <Publication data={documentInfo} isSuccess={isSuccess} isLoading={isLoading} />
    </Box >
  )
}

export default Publications

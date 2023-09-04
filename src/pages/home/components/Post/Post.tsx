import { Box, Button, FormControl, Heading, Textarea } from "@chakra-ui/react";
import { InputFileImg } from "@components/index";
import useGetImg from "@hook/useGetImg/useGetImg";
import usePost from "@pages/home/hook/usePost/usePost";
import ContainerImage from "../ContainerImage/ContainerImage";
const Post = () => {
  const { handleImageUpdate, handleResetImg, imgRef, imgSrc, stateImg, setImgSrc, setStateImg } = useGetImg();
  const { onSubmit, postRef } = usePost(imgRef, setImgSrc, setStateImg);

  return (
    <Box as="section" textAlign={"center"}>
      <Box bgColor={"orange.600"} color="whiteAlpha.800" padding={"21px 0"} display={"flex"} flexDirection={"column"}
        justifyContent={"center"} alignItems={"center"}>
        <Box as="header">
          <Heading as={"h2"} size="lg" padding={"0 23rem"}>Publica las resetas para que todo los demás sepan de tu secreto</Heading>
        </Box>
        <ContainerImage src={imgSrc} status={stateImg} onClick={handleResetImg} />
        <FormControl as="form" onSubmit={onSubmit} display={"flex"} flexDirection={"column"} alignItems={"center"} w={"400px"}
          marginBlockStart={"29px"} gap="12px">
          <Textarea ref={postRef} placeholder="Publicar reseta" w={"490px"} resize={"none"} h={"auto"}

            bgColor={"orange.800"} _placeholder={{ color: "whiteAlpha.900" }} />
          <Box display={"flex"} justifyContent={"center"} >
            <Button type="submit">Publicar</Button>
            <InputFileImg refImg={imgRef} onClick={handleImageUpdate} />
          </Box>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Post
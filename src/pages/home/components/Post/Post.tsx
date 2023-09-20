import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { InputFileImg, SelectCustom } from "@components/index";
import useGetImg from "@hook/useGetImg/useGetImg";
import usePost from "@pages/home/hook/usePost/usePost";
import { FoodType, SeasonType } from "@pages/home/util/CategoryTypes/CategoryTypes.util";
import ContainerImage from "../ContainerImage/ContainerImage";

const Post = () => {

  const { handleImageUpdate, handleResetImg, imgRef, imgSrc, stateImg, setImgSrc, setStateImg } = useGetImg();
  const { onSubmit, postRef, handleFoodTyp, handleSeasonType, handleTitle, title } = usePost(imgRef, setImgSrc, setStateImg);
  
  return (
    <Box as="section" textAlign={"center"}>
      <Box bgColor={"orange.600"} color="whiteAlpha.800" padding={"21px 0"} display={"flex"} flexDirection={"column"}
        justifyContent={"center"} alignItems={"center"}>
        <Box as="header">
          <Heading as={"h2"} size="lg" padding={"0 23rem"}>Publica las resetas para que todo los demás sepan de tu secreto</Heading>
        </Box>
        <FormControl as="form" onSubmit={onSubmit} flexDirection={"column"} alignItems={"center"} w={"400px"}
          marginBlockStart={"29px"} gap="12px" >
          <FormLabel fontWeight={"bold"}>Titulo de la reseta:</FormLabel>
          <Input placeholder="ejemplo: Fideos con tuco" w={"490px"}
            bgColor={"orange.800"} _placeholder={{ color: "white" }}
            required onChange={handleTitle} value={title} />
          <ContainerImage src={imgSrc} status={stateImg} onClick={handleResetImg} />
          <FormLabel fontWeight={"bold"}>Categoría del plato:</FormLabel>
          <SelectCustom data={FoodType} placeholder="Ejemplo:Sopas" onChange={handleFoodTyp} />
          <FormLabel fontWeight={"bold"}>Tipo de estación:</FormLabel>
          <SelectCustom data={SeasonType} placeholder="Ejemplo:Verano" onChange={handleSeasonType} />
          <FormLabel fontWeight={"bold"}>Ingredientes:</FormLabel>
          <Textarea ref={postRef} placeholder="Publicar reseta" w={"490px"} resize={"none"} h={"190px"}
            bgColor={"orange.800"} _placeholder={{ color: "white" }} />
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
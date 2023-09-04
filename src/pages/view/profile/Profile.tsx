import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import { InputFileImg } from "@components/index";
import useGetImg from "@hook/useGetImg/useGetImg";
import useProfile from "./hook/useProfile/useProfile";

const Profile = () => {

  const { imgRef, handleImageUpdate, imgSrc, handleResetImg, setImgSrc } = useGetImg();
  const { email, handleEmail, handleName, handleSubmit, name, user, isLoading } = useProfile({ imgRef, imgSrc, setImgSrc });

  return (
    <Box as="main" display={"grid"} placeItems={"center"} minH={"100vh"}>
      <Box as="section" display={"grid"} placeItems={"center"} bgColor={"orange.500"} h={"400px"} w="1200px" borderRadius={"6px"}>

        <FormControl as="form" onSubmit={handleSubmit} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>

          <Box as="header" position={"relative"} borderRadius={"full"} bgColor={"whiteAlpha.800"} w="240px" h="240px" padding={"12px"}>
            {imgSrc && <Button as={SmallCloseIcon} size={"sm"} w={"36px"} h={"36px"} borderRadius={"50%"}
              position={"absolute"} insetInlineEnd={"8%"} insetBlockStart={"6%"} onClick={handleResetImg} />}
            <Image src={imgSrc || user.photo || '/assets/user.svg'} alt={user.name || '/assets/user.svg'} w="100%" h="100%"
              borderRadius={"full"} objectFit={"cover"} />
            <InputFileImg refImg={imgRef} onClick={handleImageUpdate} />
            {isLoading && <Box position={"absolute"} insetBlockStart={"0"} insetInline={"0"}
              borderRadius={"full"} w="100%" h="100%" bgColor={"whiteAlpha.600"} />}
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <FormLabel marginTop={"12px"}>Nombre:</FormLabel>
            <Input type="text" value={name} onChange={handleName} />
            <FormLabel marginTop={"12px"}>Email:</FormLabel>
            <Input type="email" value={email} onChange={handleEmail} />
            <Button type="submit" marginTop={"23px"}>Editar</Button>
          </Box>

        </FormControl>
      </Box>
    </Box>
  )
}

export default Profile

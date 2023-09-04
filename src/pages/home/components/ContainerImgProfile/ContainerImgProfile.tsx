import { As, Box, Heading, Image, Text } from "@chakra-ui/react";
interface Props {
  imgUser: string | undefined;
  alt: string;
  nameUser: string;
  emailUser: string;
  as: As;

}

const ContainerImgProfile = ({ imgUser, alt, emailUser, nameUser, as }: Props) => {

  return (
    <Box as={as} display={"flex"} alignItems={"center"} gap="10px">
      <Box bgColor={"white"} borderRadius={"full"} padding={"4px"}>
        <Image src={imgUser || '/assets/user.svg'} alt={alt}
          boxSize={"40px"} borderRadius={"full"} />
      </Box>
      <Box>
        <Heading as="h3">{nameUser}</Heading>
        <Text fontSize={"14px"}>{emailUser}</Text>
      </Box>
    </Box>
  )
}

export default ContainerImgProfile
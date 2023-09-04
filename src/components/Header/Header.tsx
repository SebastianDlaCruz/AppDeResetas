import { Box, Text } from "@chakra-ui/react";
const Header = () => {

  return (
    <Box as="header" h={"78px"} bgColor={"orange.600"}>
      <Text color="white" textAlign={"center"} fontSize={"2rem"}>Bienvenido</Text>
    </Box>
  )
}

export default Header

import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Link, Text, useDisclosure } from "@chakra-ui/react";
import { useUserContext } from "@context/index";
import { singOutUser } from "@pages/auth";
import { NavLink as RouterLink } from "react-router-dom";
const NavBar = () => {

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { user } = useUserContext();


  return (
    <>
      <Button as={HamburgerIcon} onClick={onOpen} color="white" position={"absolute"} bg={"none"} _hover={{
        bg: 'blackAlpha.200'
      }} top="0%" right={"2%"} boxSize={"59px"} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" >
        <DrawerOverlay />
        <DrawerContent bgColor={"orange.300"}>
          <DrawerCloseButton color="white" />
          <DrawerHeader display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box bgColor={"white"} borderRadius='full' padding={"14px"}>
              <Image src={user.photo || '/assets/user.svg'} alt={user.name}
                boxSize='150px' h={"123px"} w={"123px"} objectFit={"cover"} borderRadius={"full"} />
            </Box>
            <Text>{user.name}</Text>
          </DrawerHeader>
          <DrawerBody>
            <Box as="menu" listStyleType={"none"} display={"flex"}
              flexDirection={"column"} gap="22px" justifyContent={"center"} alignItems={"center"} h="200px">
              <Box as="li"><Link as={RouterLink} display={"inline-block"} minW={"237px"} padding={".6em"} color="orange.50" borderRadius={"4px"} _hover={{ textDecoration: "none", bgColor: "orange.900" }} bgColor="orange.800" to={"/"}>Inicio</Link></Box>
              <Box as="li"><Link as={RouterLink} display={"inline-block"} minW={"237px"} padding={".6em"} color="orange.50" borderRadius={"4px"} _hover={{ textDecoration: "none", bgColor: "orange.900" }} bgColor="orange.800" to={"/perfil"}>Perfil</Link></Box>
              <Box as="li"><Link as={RouterLink} display={"inline-block"} minW={"237px"} padding={".6em"} color="orange.50" borderRadius={"4px"} _hover={{ textDecoration: "none", bgColor: "orange.900" }} bgColor="orange.800" to={"/favoritos"}>Favoritos</Link></Box>
              <Box as="li"><Link as={RouterLink} display={"inline-block"} minW={"237px"} padding={".6em"} color="orange.50" borderRadius={"4px"} _hover={{ textDecoration: "none", bgColor: "orange.900" }} bgColor="orange.800" to={"/busqueda_avanzada"}>Búsqueda avanzada</Link></Box>
            </Box>
          </DrawerBody>
          <DrawerFooter display={"flex"} justifyContent={"center"}>
            <Button onClick={singOutUser}>Cerrar session</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default NavBar
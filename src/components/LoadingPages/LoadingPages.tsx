import { Box, Spinner, Text } from "@chakra-ui/react"
const LoadingPages = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} minH={"100vh"}>

      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='yellow.500'
        size='xl'
      />
      <Text color={"orange.700"} fontSize={"2em"} fontWeight={"bold"}>Cargando</Text>
    </Box>
  )
}

export default LoadingPages
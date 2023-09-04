import { Box, FormControl, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  children: any;
  onSubmit: () => void;
  isInvalid: boolean;
  messageError: string
}

const LayoutForm = ({ title, children, isInvalid, onSubmit, messageError }: Props) => {
  return (
    <>
      <Box as={'main'}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"} h={"100vh"}>

        <Box as="section" display={"flex"}
          justifyContent={"center"} flexDirection={"column"}
          alignItems={"center"} padding={"32px"} w={"378px"} minH={"400px"}
          bgColor={"yellow.800"} color={"whiteAlpha.900"} borderRadius={"12px"}>
          <Heading textAlign={"center"}>{title}</Heading>
          <FormControl as={'form'} onSubmit={onSubmit} isInvalid={isInvalid}>
            {children}
          </FormControl>
          {messageError && <Text textAlign={"center"} fontWeight={"bold"} color="red.400">{messageError}</Text>}
        </Box>
      </Box >
    </>
  )
}

export default LayoutForm

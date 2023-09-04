import { Search2Icon } from '@chakra-ui/icons';
import { Box, FormControl, Icon, Input } from "@chakra-ui/react";
const Search = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <FormControl as={"form"} position={"relative"} w={"400px"}>
        <Input type="text" placeholder="Buscar" borderColor={"blackAlpha.700"} />
        <Icon as={Search2Icon} position={"absolute"} insetInlineEnd={"19px"} insetBlock={"26%"} />
      </FormControl>
    </Box>
  )
}

export default Search
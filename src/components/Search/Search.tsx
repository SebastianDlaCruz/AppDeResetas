import { Search2Icon } from '@chakra-ui/icons';
import { Box, Button, Icon, Input } from "@chakra-ui/react";
import { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  w: string;
}

const Search = ({ value, onChange, w }: Props) => {
  return (
    <Box display={"flex"} justifyContent={"center"} w={w}>
      <Input type="text" placeholder="Buscar" borderColor={"blackAlpha.700"} onChange={onChange} value={value} />
      <Button type="submit" position={"absolute"}
        insetInlineEnd={"1px"} insetBlock={"-3%"} maxH={"100%"}
        background={'none'} _hover={{ background: 'none' }} boxSize={"50px"} zIndex={'1'}>
        <Icon as={Search2Icon} />
      </Button>
    </Box >
  )
}
export default Search

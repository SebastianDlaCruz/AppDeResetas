import { Box, Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface Props {
  data: string[];
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectCustom = ({ data, placeholder, onChange }: Props) => {
  return (
    <Select placeholder={placeholder} bgColor={"orange.800"} w={"490px"} color="white" required onChange={onChange}>
      {data.map((item, index) => <Box as="option" key={index} color={"orange.800"} value={item}>{item}</Box>)}
    </Select>
  )
}

export default SelectCustom

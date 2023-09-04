import { Button, Image, Input } from '@chakra-ui/react';
import { LegacyRef } from 'react';

interface PropsFile {
  refImg: LegacyRef<HTMLInputElement>;
  onClick: () => void;
}

const InputFileImg = ({ refImg, onClick }: PropsFile) => {
  return (
    <Button as="label" htmlFor="upload-btn" size="sm"
      display={"inline-block"} bgColor={"transparent"} _hover={{ bgColor: "transparent" }}
      cursor={"pointer"}>
      <Input type="file" accept="image/*" id="upload-btn" display={"none"} ref={refImg} onChange={onClick} />
      <Image src="/assets/icon-image.svg" alt="icon image" boxSize={"30px"} />
    </Button>
  )
};

export default InputFileImg;

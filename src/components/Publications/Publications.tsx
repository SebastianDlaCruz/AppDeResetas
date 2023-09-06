import { Box, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
interface Props {
  isSuccess: boolean;
  children: JSX.Element | JSX.Element[] | any;
  isLoading: boolean;
  dataLength: number;
  textError: string;
  dataLengthFavorite?: number;
}

const Publication = ({ isSuccess, children, isLoading, dataLength, textError, dataLengthFavorite }: Props) => {

  if (!isSuccess) return (
    <Box w={"769px"} minH="360px" padding="6px" bgColor={"gray.300"} borderRadius={"3px"}>
      <Skeleton height='40px' fadeDuration={1} isLoaded={isLoading} />
      <Skeleton height='200px' fadeDuration={1} isLoaded={isLoading} marginBlockStart={"12px"} />
      <SkeletonText mt='4' height={"40px"} noOfLines={4} spacing='4' skeletonHeight='2' />
    </Box>
  );
  console.log(dataLengthFavorite);
  if (dataLength === 0 || dataLengthFavorite === 0) {
    return (
      <Text fontSize={"40px"} fontWeight={"bold"} color="orange.800">{textError}</Text>
    )
  }



  return (
    <>
      {children}
    </>
  )
}

export default Publication;

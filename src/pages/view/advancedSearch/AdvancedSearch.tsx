import { Box, Checkbox, FormControl, Heading, Image, Text } from "@chakra-ui/react";
import Publication from "@components/Publications/Publications";
import { Search, SelectCustom } from "@components/index";
import { useUserContext } from "@context/index";
import { ButtonStart, ContainerComment, ContainerImgProfile, FormComment, getFavorite } from "@pages/home";
import { FoodType, SeasonType } from "@pages/home/util/CategoryTypes/CategoryTypes.util";
import useSearch from "./hook/useSearch/useSearch";
const AdvancedSearch = () => {

  const { handleFood, handleSearch, handleSeason,
    search, handleSubmit, result, isLoading, isSuccess } = useSearch();
  const { user } = useUserContext();
  return (
    <>
      <FormControl as={"form"} onSubmit={handleSubmit} position={"relative"} w={"400px"}>
        <Search value={search} onChange={handleSearch} w="400px" />
        <SelectCustom placeholder="Por tipo de comida " data={FoodType} onChange={handleFood} />
        <SelectCustom placeholder="Por tipo de estación " data={SeasonType} onChange={handleSeason} />
        <Checkbox />
      </FormControl>

      <Publication dataLength={result.length} isLoading={isLoading} isSuccess={isSuccess} textError="Sin resultados😓">
        {
          result.map((item, index) => (
            <Box as="article" key={index} position={"relative"} w={"769px"} minH="100%" bgColor={"gray.300"} padding={"12px"} borderRadius={"3px"}>
              <ButtonStart favorite={getFavorite(item.favoritesCollection, user.uid)} id={item.id} post={item} />
              <ContainerImgProfile as={"header"} imgUser={item.imgUser} alt={item.nameUser}
                emailUser={item.emailUser} nameUser={item.nameUser} date={item.date} />

              <Heading as="h2" textAlign={"center"}>{item.title}</Heading>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap="32px" marginBlockStart={"14px"}>
                {item.img.trim() &&
                  <Box w={"89%"} h="400px">
                    <Image src={item.img || '/assets/user.svg'} alt={item.description} w={"100%"} h="inherit" objectFit={"cover"} /></Box>}
                <Text fontWeight={"bold"}>Tipo  de comida: <Text as="span" fontWeight={"medium"}>{item.foodType}</Text></Text>
                <Text fontWeight={"bold"}>Tipo  de temporada: <Text as="span" fontWeight={"medium"}>{item.seasonType}</Text></Text>
                <Text>{item.description}</Text>
              </Box>

              <Box>
                <Text>Comentarios</Text>
                <ContainerComment idPost={item.id} />
              </Box>

              <Box as="footer">
                <FormComment idPost={item.id} />
              </Box>
            </Box>))
        }
      </Publication>
    </>
  )
}

export default AdvancedSearch

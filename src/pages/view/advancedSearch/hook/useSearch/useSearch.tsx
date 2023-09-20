import useGetData from "@hook/useGetData/useGetData";
import { ModelPublic } from "@pages/home";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { advancedFilter } from "../../util/advancedFilter/advancedFilter.util";
const useSearch = () => {

  const [food, setFood] = useState("");
  const [season, setSeason] = useState("")
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFood = (event: ChangeEvent<HTMLSelectElement>) => setFood(event.target.value);
  const handleSeason = (event: ChangeEvent<HTMLSelectElement>) => setSeason(event.target.value);
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  const { documentInfo } = useGetData<ModelPublic>({ nameDoc: 'Publicaciones' });


  const result = useMemo(() => {
    setIsLoading(true);
    setIsSuccess(true)
    return advancedFilter(documentInfo, search, food, season)
  }, [search, food, season]);


  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    setSearch("");
  }

  return {
    food,
    season,
    search,
    handleFood,
    handleSeason,
    handleSearch,
    handleSubmit,
    result,
    isSuccess,
    isLoading
  }
}

export default useSearch

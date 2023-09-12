import { ModelPublic } from "@pages/home/components/Publications/Publications";
export const advancedFilter = (data: ModelPublic[], search: string, food: string, season: string) => {
  const newData = data.filter(item => {
    if (search.length === 0) {
      if (item.foodType === food && item.seasonType === season
        || item.description.includes(search) || item.title.includes(search)) {
        return item;
      }
    } else if (search.length !== 0) {
      if (item.description.includes(search) || item.title.includes(search) || item.foodType === food && item.seasonType === season) {
        return item;
      }
    }

  })
  return newData;
}
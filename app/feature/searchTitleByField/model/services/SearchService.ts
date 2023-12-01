import { axiosAPI } from '@/app/shared/api/api'
import { AnimeDataResponse } from '@/app/entity/Anime'

export const SearchService = {
	async getSearchedByAll(searchString: string) {
		return axiosAPI.get<AnimeDataResponse>(
			`https://kitsu.io/api/edge/anime?filter[text]=${searchString}&page[limit]=6)`
		)
	},
	async getDefault() {
		return axiosAPI.get<AnimeDataResponse>(
			`https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&sort=-user_count`
		)
	},
}

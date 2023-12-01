import { axiosAPI } from '@/app/shared/api/api'
import { Anime } from '@/app/entity/Anime'

export interface AnimeDataResponse {
	data: Anime[]
	links: {
		first: string
		last: string
		next: string
		prev: string
	}
	meta?: number
}

export const AnimeService = {
	async getBySearchAll(searchString: string) {
		return await axiosAPI.get<AnimeDataResponse>(
			`https://kitsu.io/api/edge/anime?filter[text]=${searchString})`
		)
	},
	async getAverageRating(page: number, limit: number) {
		return await axiosAPI.get<AnimeDataResponse>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&sort=-average_rating`
		)
	},
	async getUserCount(page: number, limit: number) {
		const response = await axiosAPI.get<AnimeDataResponse>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&sort=-user_count`
		)

		return { ...response.data, prevOffset: page }
	},
	async getUpcoming(page: number, limit: number) {
		return await axiosAPI.get<AnimeDataResponse>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&filter[status]=upcoming`
		)
	},
	async getAll(
		params = 'https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0'
	) {
		return await axiosAPI
			.get<AnimeDataResponse>(params)
			.then((response) => response.data)
	},
}

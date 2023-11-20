import { axiosAPI } from '@/app/shared/api/api'
import { Anime } from '@/app/entity/Anime'

interface AnimeData {
	data: Anime[]
	meta?: number
}

export enum ANIME_SORT_TYPE {
	RATING = '-average_rating',
	POPULAR = '-user_count',
	MEDIA = '-total_media_count',
}
export enum ANIME_STATUS_TYPE {
	ONGOING = '-average_rating',
}

export const AnimeService = {
	async getBySearchAll(searchString: string) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?filter[text]=${searchString})`
		)
	},
	async getAverageRating(page: number, limit: number) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&sort=-average_rating`
		)
	},
	async getUserCount(page: number, limit: number) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&sort=-user_count`
		)
	},
	async getMediaCount(page: number, limit: number) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&sort=-total_media_count`
		)
	},
	async getStatus(page: number, limit: number) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}&sort=-average_rating`
		)
	},
}

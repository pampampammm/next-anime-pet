import { axiosAPI } from '@/app/shared/api/api'
import { FilterDataResponse } from '../../types/types'

export const FilterService = {
	async getAll(limit = 15, page = 0) {
		return axiosAPI.get<FilterDataResponse>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}`
		)
	},
}

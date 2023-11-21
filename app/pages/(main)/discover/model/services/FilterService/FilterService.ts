import { axiosAPI } from '@/app/shared/api/api'
import { FilterData } from '../../types/types'

export const FilterService = {
	async getAll(limit = 15, page = 0) {
		return axiosAPI.get<FilterData>(
			`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page}`
		)
	},
}

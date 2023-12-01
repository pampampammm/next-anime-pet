import { axiosAPI } from '@/app/shared/api/api'
import { FilterDataResponse } from '../../types/types'
import { SORT_TYPE } from '@/app/shared/const/constants'

const mergedApiUrl = (sortType: SORT_TYPE, page: number, limit: number) => {
	const base = `https://kitsu.io/api/edge/anime?
				  page[limit]=${limit}
				  &page[offset]=${page}`

	const sort = sortType === SORT_TYPE.BY_DEFAULT ? `` : `&sort${sortType}`

	return base + sort
}

export const FilterService = {
	async getAll(sortType: SORT_TYPE, page: number, limit: number) {
		return axiosAPI.get<FilterDataResponse>(
			mergedApiUrl(sortType, page, limit)
		)
	},
}

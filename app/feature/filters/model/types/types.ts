import { Anime } from '@/app/entity/Anime'
import { SORT_TYPE } from '@/app/shared/const/constants'

export const animeSorting: Record<number, string> = {
	[SORT_TYPE.BY_DEFAULT]: '',
	[SORT_TYPE.BY_RATTING]: '-average_rating',
	[SORT_TYPE.BY_NAME]: '-name',
	[SORT_TYPE.BY_DATE]: 'upcoming',
	[SORT_TYPE.BY_POPULARITY]: '-user_count',
}

export interface FiltersSchema {
	sortData: {
		sortType: SORT_TYPE
		sortBy: '-' | '+'
	}
	filterData: {
		genre: string
		status: string
	}
}

export interface FilterDataResponse {
	data: Anime[]
}

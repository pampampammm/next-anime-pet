import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { SORT_TYPE } from '@/app/shared/const/constants'

export const getFilterSort = (state: StateSchema) =>
	state.filter.sortData?.sortType || SORT_TYPE.BY_POPULARITY

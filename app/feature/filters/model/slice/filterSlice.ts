import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiltersSchema } from '@/app/feature/filters/model/types/types'
import { SORT_TYPE } from '@/app/shared/const/constants'

const initialState: FiltersSchema = {
	filterData: {
		genre: '',
		status: '',
	},
	sortData: {
		sortType: SORT_TYPE.BY_DEFAULT,
		sortBy: '-',
	},
}

export const filterSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setSortType: (state, action: PayloadAction<SORT_TYPE>) => {
			state.sortData.sortType = action.payload
		},
	},
})

export const { actions: filterActions } = filterSlice
export const { reducer: filterReducer } = filterSlice

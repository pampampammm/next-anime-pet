import { filterReducer } from '@/app/feature/filters/model/slice/filterSlice'
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore() {
	const rootReducer: ReducersMapObject<StateSchema> = {
		filter: filterReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
		reducer: reducerManager.getReducerMap,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()

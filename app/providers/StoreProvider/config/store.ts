import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'
import { userReducers } from '@/app/entity/User/model/slice/userSlice'

export function createReduxStore() {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducers,
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

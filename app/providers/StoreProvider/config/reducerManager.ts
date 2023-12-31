import {
	AnyAction,
	CombinedState,
	combineReducers,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { StateSchema, StateSchemaKey } from './StateSchema'

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (
		state: StateSchema,
		action: AnyAction
	) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
	const reducers = { ...initialReducers }

	// корневой редьюсер
	let combinedReducer = combineReducers(reducers)

	let keysToRemove: StateSchemaKey[] = []

	return {
		getReducerMap: () => reducers,
		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				// eslint-disable-next-line no-param-reassign
				state = { ...state }
				// @ts-ignore
				keysToRemove.forEach((key) => delete state[key])
				keysToRemove = []
			}

			return combinedReducer(state, action)
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			combinedReducer = combineReducers(reducers)
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return
			}

			// @ts-ignore
			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		},
	}
}

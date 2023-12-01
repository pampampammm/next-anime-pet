import { ReducerManager } from './reducerManager'
import { UserSchema } from '@/app/entity/User'
import { EnhancedStore } from '@reduxjs/toolkit'
import { FiltersSchema } from '@/app/feature/filters'

export interface StateSchema {
	user?: UserSchema
	filter: FiltersSchema
	// async reducers, can be initialized in runtime component
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

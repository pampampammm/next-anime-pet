import { Reducer } from '@reduxjs/toolkit'
import { ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import {
	ReduxStoreWithManager,
	StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'

interface WrapperProps {
	reducerKey: StateSchemaKey
	reducer: Reducer
	children: ReactNode
	removeAfterUnmount?: boolean
}

const DynamicStoreReducerWrapper = (props: WrapperProps) => {
	const { reducer, reducerKey, children, removeAfterUnmount = false } = props

	const store = useStore() as ReduxStoreWithManager
	const dispatch = useAppDispatch()

	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap()

		const isMounted = mountedReducers[reducerKey]

		if (!isMounted) {
			store.reducerManager.add(reducerKey, reducer)
			// dispatch({ type: `INIT ${reducerKey} reducer` })
		}

		return () => {
			if (removeAfterUnmount) {
				store.reducerManager.remove(reducerKey)
				// dispatch({ type: `DESTROY ${reducerKey} reducer` })
			}
		}
	}, [])

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>{children}</>
	)
}

export default DynamicStoreReducerWrapper

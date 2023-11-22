'use client'

import React from 'react'

import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface ProviderProps {
	children: React.ReactNode
}

const StoreProvider = (props: ProviderProps) => {
	const { children } = props

	const store = createReduxStore()

	return <Provider store={store}>{children}</Provider>
}

export default StoreProvider

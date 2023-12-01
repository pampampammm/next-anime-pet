'use client'

import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { StoreProvider } from '../StoreProvider'
import { Navigation } from '@/app/widgets/Navigation'

interface ProviderProps {
	children: React.ReactNode
}

const queryClientInstance = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProviders = ({ children }: ProviderProps) => {
	return (
		<StoreProvider>
			<QueryClientProvider client={queryClientInstance}>
				<ReactQueryDevtools initialIsOpen={false} />
				{children}
			</QueryClientProvider>
		</StoreProvider>
	)
}

export default MainProviders

'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import HeadProvider from '@/app/providers/HeadProvider/ui/HeadProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'

interface ProviderProps {
	children: React.ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProviders = ({ children }: ProviderProps) => {
	return (
		<StoreProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{children}
			</QueryClientProvider>
		</StoreProvider>
	)
}

export default MainProviders

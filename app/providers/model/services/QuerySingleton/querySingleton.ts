import { cache } from 'react'
import { QueryClient } from 'react-query'

const queryClientInstance = cache(
	() =>
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
)

export default queryClientInstance

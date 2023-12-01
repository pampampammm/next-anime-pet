import { GetStaticProps, NextPage } from 'next'

import { dehydrate, QueryClient } from 'react-query'
import { CatalogPage } from '@/app/pages'
import { axiosAPI } from '@/app/shared/api/api'

const Catalog: NextPage = () => {
	return <CatalogPage />
}

export const getStaticProps: GetStaticProps = async (context) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('default query search', () =>
		axiosAPI.get(
			`https://kitsu.io/api/edge/anime?page[limit]=7&page[offset]=1&sort=-user_count`
		)
	)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export default Catalog

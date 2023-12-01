import { Anime, AnimeService } from '@/app/entity/Anime'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import context from 'react-redux/src/components/Context'
import { ProjectPage } from '@/app/pages'

const Anime: NextPage<{
	anime: Anime | undefined
}> = ({ anime }) => {
	return <ProjectPage />
}

export default Anime

// export const getStaticPath: GetStaticPaths = async () => {
// 	try {
// 		const { data: movies } = await AnimeService.()
// 		const paths = movies.map((movie) => ({
// 			params: { slug: movie.slug },
// 		}))
//
// 		return { paths, fallback: 'blocking' }
// 	} catch {
// 		return {
// 			paths: [],
// 			fallback: false,
// 		}
// 	}
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const queryClient = new QueryClient()
	const idToSearch = String(params?.slug)

	await queryClient.prefetchQuery({
		queryKey: 'anime query',
		queryFn: () => AnimeService.getById(idToSearch),
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

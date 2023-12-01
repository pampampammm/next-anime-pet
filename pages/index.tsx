import { GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { axiosAPI } from '@/app/shared/api/api'
import { HomePage } from '@/app/pages'
import { AnimeService } from '@/app/entity/Anime'

const Home: NextPage = () => {
	return <HomePage />
}

export const getStaticProps: GetStaticProps = async (context) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('default query search', () =>
		axiosAPI.get(
			`https://kitsu.io/api/edge/anime?page[limit]=7&page[offset]=1&sort=-user_count`
		)
	)

	await queryClient.prefetchQuery({
		queryKey: 'user count anime',
		queryFn: () => AnimeService.getUserCount(0, 6),
	})

	await queryClient.prefetchQuery({
		queryKey: 'upcoming anime',
		queryFn: () => AnimeService.getUpcoming(0, 6),
	})

	await queryClient.prefetchQuery({
		queryKey: 'ratting anime',
		queryFn: () => AnimeService.getAverageRating(0, 6),
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}

	// try {
	// 	const { data: ratingAnimeData } = await AnimeService.getAverageRating(
	// 		0,
	// 		3
	// 	)
	//
	// 	const slides: HomeSlide[] = ratingAnimeData.data.map((item) => {
	// 		const { id, attributes } = item
	//
	// 		return {
	// 			link: `project/${attributes.slug}`,
	// 			id: id,
	// 			title: attributes.titles.en,
	// 			rating: item.attributes.popularityRank,
	// 			bigPoster: item.attributes.posterImage.large,
	// 		} as HomeSlide
	// 	})
	//
	// 	const [popularItems, ratingItems, upcomingItems] = await Promise.all([
	// 		await AnimeService.getUserCount(0, 6),
	// 		await AnimeService.getAverageRating(0, 6),
	// 		await AnimeService.getUpcoming(0, 6),
	// 	])
	// 		.then((response) => response.map((data) => data.data.data))
	// 		.then((response) =>
	// 			response.map((anime) =>
	// 				anime.map((item) => {
	// 					const { id, attributes } = item
	//
	// 					return {
	// 						id: id,
	// 						attributes: {
	// 							link: `project/${attributes.slug}`,
	// 							poster: attributes.posterImage.original,
	// 							rank: attributes.popularityRank,
	// 							title: attributes.titles.en,
	// 						},
	// 					} as HomeAnimeItem
	// 				})
	// 			)
	// 		)
	//
	// 	console.log('asdasd')
	//
	// 	return {
	// 		props: {
	// 			dehydratedState: dehydrate(queryClient)
	// 			slides: slides,
	// 			content: {
	// 				popularItems,
	// 				ratingItems,
	// 				upcomingItems,
	// 			},
	// 		} as HomeStaticProps,
	// 	}
	// } catch (error) {
	// 	return {
	// 		props: {
	// 			slides: [],
	// 			content: {
	// 				popularItems: [],
	// 				upcomingItems: [],
	// 				ratingItems: [],
	// 			},
	// 		} as HomeStaticProps,
	// 	}
	// }
}

export default Home

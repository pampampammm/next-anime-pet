import { InfiniteData, useInfiniteQuery, useQuery } from 'react-query'
import { Anime, AnimeDataResponse, AnimeService } from '@/app/entity/Anime'
import { HomeAnimeItem } from '@/app/pages/ui/home'
import { AnimeItem } from '@/app/pages/model/types/types'
import { AnimeAttributes } from '@/app/entity/Anime/model/types/types'

const getSelectedData = (response: AnimeDataResponse): AnimeItem[] => {
	const { data } = response

	return data.map(({ id, attributes }) => {
		const { titles, posterImage, startDate, popularityRank } = attributes

		const title = titles.en === '' ? titles.en : titles.en_jp
		const subTitle = titles.ja_jp === '' ? titles.ja_jp : titles.en_jp

		const originalSizeImage = posterImage.original
		const smallSizeImage = posterImage.tiny
			? posterImage.tiny
			: posterImage.original

		const date = new Date(startDate)
		const dateToShow = date.getFullYear()

		return {
			id: id,
			content: {
				title: title,
				subTitle: subTitle,
				posterImage: {
					originalSizePoster: originalSizeImage,
					lowSizePoster: smallSizeImage,
				},
				rank: popularityRank,
				link: `anime/${id}`,
				date: dateToShow.toString(),
			},
		} as AnimeItem
	})
}

// function isAnimeResponse(value: unknown): value is AnimeDataResponse {
// 	if (!(typeof value === 'object' && value !== null)) {
// 		return false
// 	}
//
// 	if()
// }
//

const getReducedData = <T extends AnimeDataResponse>(data: T[]) => {
	data.reduce(
		// @ts-ignore
		(acc, data) => [...acc, ...data.data],
		// return [...acc, ...data.data] as AnimeDataResponse[]
		[]
	)

	return {}
}

interface ResponseAnime {}

interface AnimeInfinityError {
	body: string
}

export const useAnimeCompilation = (page: number, limit = 12) => {
	const queryData = useInfiniteQuery<AnimeDataResponse, AnimeInfinityError>({
		queryKey: ['user count anime'],
		queryFn: (context) => AnimeService.getAll(context.pageParam),
		getNextPageParam: (lastPage) => lastPage?.links.next,
		getPreviousPageParam: (firstPage) => firstPage?.links.prev,
		select: (data) => {
			const parsedData = data?.pages
				?.reduce(
					(acc, pageData) =>
						[...acc, ...pageData.data] as AnimeDataResponse[],
					[]
				)
				// @ts-ignore
				.map(({ id, attributes }) => {
					const { titles, posterImage, startDate, popularityRank } =
						attributes

					const title = titles.en === '' ? titles.en : titles.en_jp
					const subTitle =
						titles.ja_jp === '' ? titles.ja_jp : titles.en_jp

					const originalSizeImage = posterImage.original
					const smallSizeImage = posterImage.tiny
						? posterImage.tiny
						: posterImage.original

					const date = new Date(startDate)
					const dateToShow = date.getFullYear()

					return {
						id: id,
						content: {
							title: title,
							subTitle: subTitle,
							posterImage: {
								originalSizePoster: originalSizeImage,
								lowSizePoster: smallSizeImage,
							},
							rank: popularityRank,
							link: `anime/${id}`,
							date: dateToShow.toString(),
						},
					} as AnimeItem
				})

			return parsedData
		},
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})

	return queryData
}
//
// {
// 	const parsedData = data?.pages
// 		?.reduce(
// 			(acc, pageData) =>
// 				[...acc, ...pageData.data] as AnimeDataResponse[],
// 			[]
// 		)
// 		// @ts-ignore
// 		.map(({ id, attributes }) => {
// 			const { titles, posterImage, startDate, popularityRank } =
// 				attributes
//
// 			const title = titles.en === '' ? titles.en : titles.en_jp
// 			const subTitle =
// 				titles.ja_jp === '' ? titles.ja_jp : titles.en_jp
//
// 			const originalSizeImage = posterImage.original
// 			const smallSizeImage = posterImage.tiny
// 				? posterImage.tiny
// 				: posterImage.original
//
// 			const date = new Date(startDate)
// 			const dateToShow = date.getFullYear()
//
// 			return {
// 				id: id,
// 				content: {
// 					title: title,
// 					subTitle: subTitle,
// 					posterImage: {
// 						originalSizePoster: originalSizeImage,
// 						lowSizePoster: smallSizeImage,
// 					},
// 					rank: popularityRank,
// 					link: `anime/${id}`,
// 					date: dateToShow.toString(),
// 				},
// 			} as AnimeItem
// 		})
//
// 	return parsedData
// },

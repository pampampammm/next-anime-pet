import { useInfiniteQuery, useQuery } from 'react-query'
import { AnimeDataResponse, AnimeService } from '@/app/entity/Anime'
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

export const useAnimeCompilation = (page: number, limit = 12) => {
	return useInfiniteQuery({
		queryKey: ['user count anime'],
		queryFn: (context) => AnimeService.getAll(context.pageParam),
		getNextPageParam: (lastPage) => lastPage?.links.next,
		getPreviousPageParam: (firstPage) => firstPage?.links.prev,
		select: (data) => {
			const parsedData = data?.pages
				// @ts-ignore
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
}

// export const useAnimeCompilation = (page = 0, limit = 6) => {
// 	return useQueries<HomeAnimeItem[]>([
// 		{
// 			queryKey: ['user count anime', page, limit],
// 			queryFn: () => AnimeService.getUserCount(page, limit),
// 			// @ts-ignore
//
// 			select: ({ data }) => getSelectedData(data),
// 		},
// 		// {
// 		// 	queryKey: ['upcoming anime', page, limit],
// 		// 	queryFn: () => AnimeService.getUpcoming(page, limit),
// 		// 	// @ts-ignore
// 		//
// 		// 	select: ({ data }) => getSelectedData(data),
// 		// },
// 		// {
// 		// 	queryKey: ['ratting anime', page, limit],
// 		// 	queryFn: () => AnimeService.getAverageRating(page, limit),
// 		// 	// @ts-ignore
// 		//
// 		// 	select: ({ data }) => getSelectedData(data),
// 		// },
// 	])
// }

// [
// 	{
// 		queryKey: ['user count anime', page, limit],
// 		queryFn: () => AnimeService.getUserCount(page, limit),
// 		select: ({ data }) => getSelectedData(data),
// 	},
// 	{
// 		queryKey: ['upcoming anime', page, limit],
// 		queryFn: () => AnimeService.getUpcoming(page, limit),
// 		select: ({ data }) => getSelectedData(data),
// 	},
// 	{
// 		queryKey: ['ratting anime', page, limit],
// 		queryFn: () => AnimeService.getAverageRating(page, limit),
// 		select: ({ data }) => getSelectedData(data),
// 	},
// ]

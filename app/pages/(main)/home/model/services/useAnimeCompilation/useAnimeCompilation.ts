import { useQueries } from 'react-query'
import { AnimeService } from '@/app/pages/(main)/home/model/services/AnimeService'
import { Anime } from '@/app/entity/Anime'

export const useAnimeCompilation = (page = 0, limit = 6) => {
	const queryData = useQueries([
		{
			queryKey: ['current anime', page, limit],
			queryFn: () => AnimeService.getAverageRating(page, limit),
			// @ts-ignore
			select: ({ data }) => data.data as Anime[],
		},
		{
			queryKey: ['popular anime', page, limit],
			queryFn: () => AnimeService.getUserCount(page, limit),
			// @ts-ignore
			select: ({ data }) => data.data as Anime[],
		},
		{
			queryKey: ['ratting anime', page, limit],
			queryFn: () => AnimeService.getAverageRating(page, limit),
			// @ts-ignore

			select: ({ data }) => data.data as Anime[],
		},
		{
			queryKey: ['status anime', page, limit],
			queryFn: () => AnimeService.getStatus(page, limit),
			// @ts-ignore

			select: ({ data }) => data.data as Anime[],
		},
	])

	return queryData
}

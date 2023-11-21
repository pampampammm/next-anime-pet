import { useQueries } from 'react-query'
import { AnimeService } from '@/app/pages/(main)/home/model/services/AnimeService'
import { Anime } from '@/app/entity/Anime'

export const useAnimeCompilation = (page = 0, limit = 6) => {
	const queryData = useQueries([
		{
			queryKey: ['popular anime', page, limit],
			queryFn: () => AnimeService.getUserCount(page, limit),
			// @ts-ignore
			select: ({ data }) => data.data as Anime[],
		},
		{
			queryKey: ['upcoming anime', page, limit],
			queryFn: () => AnimeService.getUpcoming(page, limit),
			// @ts-ignore
			select: ({ data }) => data.data as Anime[],
		},
		{
			queryKey: ['ratting anime', page, limit],
			queryFn: () => AnimeService.getAverageRating(page, limit),
			// @ts-ignore

			select: ({ data }) => data.data as Anime[],
		},
	])

	return queryData
}

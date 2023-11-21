import { useQuery } from 'react-query'
import {
	ChangeEvent,
	RefObject,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'
import { useDebounce } from '@/app/shared/hooks/useDebounce/useDebounce'
import { axiosAPI } from '@/app/shared/api/api'
import { Anime } from '@/app/entity/Anime'
import {
	SearchAnimeAttributes,
	SearchedAnime,
} from '@/app/feature/searchTitleByField/model/types/types'

interface AnimeData {
	data: Anime[]
	meta?: number
}

const SearchService = {
	async getAll(searchString: string) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?filter[text]=${searchString}&page[limit]=6)`
		)
	},
	async getDefault() {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&sort=-average_rating`
		)
	},
}

export const selectAnimeData = ({ data }: AnimeData): SearchedAnime[] => {
	const asdas = data.map((dataItem) => {
		const { popularityRank, titles, posterImage, startDate } =
			dataItem.attributes

		const titleToShow = titles.en !== '' ? titles.en : 'unknown'
		const imageToShow = posterImage.original
			? posterImage.original
			: posterImage.medium

		const date = new Date(startDate)
		const dateToShow = date.getFullYear()

		const slug = dataItem.id

		const attributes: SearchAnimeAttributes = {
			startDate: dateToShow,
			popularityRank: popularityRank,
			image: imageToShow,
			title: titleToShow,
		}

		return {
			id: dataItem.id,
			slug: slug,
			attributes: { ...attributes },
		}
	})

	return asdas
}

export const useSearch = (isFocused: boolean) => {
	const [input, setInput] = useState<string | ''>('')
	const debouncedInput = useDebounce(input, 500)

	const searchData = useQuery(
		['query search', debouncedInput],
		() => SearchService.getAll(debouncedInput),
		{
			select: ({ data }) => selectAnimeData(data),
			enabled: !!debouncedInput,
		}
	)

	const defaultQueryData = useQuery(
		['default query search', debouncedInput],
		() => SearchService.getDefault(),
		{
			select: ({ data }) => selectAnimeData(data),
			enabled: input === '' && isFocused,
		}
	)

	const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	const queryData = input !== '' ? searchData : defaultQueryData

	return { queryData, handleSetInput }
}

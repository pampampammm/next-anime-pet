import { useQuery } from 'react-query'
import { ChangeEvent, useState } from 'react'
import { useDebounce } from '@/app/shared/hooks/useDebounce/useDebounce'
import { Anime } from '@/app/entity/Anime'
import { SearchService } from '../SearchService'
import { SearchAnimeAttributes, SearchedAnime } from '../../types/types'

interface AnimeData {
	data: Anime[]
	meta?: number
}

export const selectAnimeData = ({ data }: AnimeData): SearchedAnime[] => {
	return data.map((dataItem) => {
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
			title: titleToShow,
			image: imageToShow,
		}

		return {
			id: dataItem.id,
			slug: slug,
			attributes: { ...attributes },
		}
	})
}

export const useSearch = (isFocused: boolean) => {
	const [input, setInput] = useState<string | ''>('')
	const debouncedInput = useDebounce(input, 500)

	const searchData = useQuery(
		['query search', debouncedInput],
		() => SearchService.getSearchedByAll(debouncedInput),
		{
			select: ({ data }) => selectAnimeData(data),
			enabled: !!debouncedInput,
		}
	)

	const defaultQueryData = useQuery(
		['default query search'],
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

import { useQuery } from 'react-query'
import { ChangeEvent, useState } from 'react'
import { useDebounce } from '@/app/shared/hooks/useDebounce/useDebounce'
import { axiosAPI } from '@/app/shared/api/api'
import { Anime } from '@/app/entity/Anime'

interface AnimeData {
	data: Anime[]
	meta?: number
}

const SearchService = {
	async getAll(searchString: string) {
		return axiosAPI.get<AnimeData>(
			`https://kitsu.io/api/edge/anime?filter[text]=${searchString})`
		)
	},
}

export const useSearch = () => {
	const [input, setInput] = useState('')
	const debouncedInput = useDebounce(input, 500)

	const queryData = useQuery(
		['query search', debouncedInput],
		() => SearchService.getAll(debouncedInput),
		{
			select: ({ data }) => data.data,
			enabled: !!debouncedInput,
		}
	)

	const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	return { queryData, handleSetInput }
}

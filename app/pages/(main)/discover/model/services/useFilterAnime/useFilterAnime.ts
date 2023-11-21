import { useQuery } from 'react-query'
import { FilterService } from '@/app/pages/(main)/discover/model/services/FilterService/FilterService'

const useFilterAnime = () => {
	const queryData = useQuery('filter anime', () => FilterService.getAll(), {
		select: ({ data }) => data.data,
	})

	return queryData
}

export default useFilterAnime

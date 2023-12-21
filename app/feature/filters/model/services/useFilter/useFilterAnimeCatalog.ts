import { useQuery } from 'react-query'
import { FilterService } from '../FilterService/FilterService'
import { useSelector } from 'react-redux'
import { getFilterSort } from '@/app/feature/filters/model/selectors/getFilter'
import { AnimeDataResponse } from '@/app/entity/Anime'
import { AnimeCatalogItem } from '@/app/pages/ui/catalog/model/types/types'

interface FilterProps {
	page?: number
	contentCount?: number
}

const getSelectedData = (response: AnimeDataResponse): AnimeCatalogItem[] => {
	const { data } = response

	return data.map(({ id, attributes }) => {
		const { titles, posterImage, startDate, popularityRank } = attributes

		const title = titles.en === '' ? titles.en : titles.en_jp
		const subTitle = titles.ja_jp !== '' ? titles.ja_jp : titles.en_jp

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
				date: dateToShow.toString(),
				rank: popularityRank,
				link: `anime/${id}`,
			},
		} as AnimeCatalogItem
	})
}

const useFilterAnimeCatalog = ({
	contentCount = 15,
	page = 0,
}: FilterProps) => {
	const sortType = useSelector(getFilterSort)

	return useQuery(
		['filter anime query', sortType, page, contentCount],
		() => FilterService.getAll(sortType, page, contentCount),
		{
			select: ({ data }) => getSelectedData(data),
		}
	)
}

export default useFilterAnimeCatalog

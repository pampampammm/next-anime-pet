import { useQuery } from 'react-query'

import { axiosAPI } from '@/app/shared/api/api'
import { INavigationItem } from '@/app/widgets/Navigation/model/types/types'
import { CategoryData } from '@/app/entity/Genre/model/types/types'

export const CategoryService = {
	async getCategories(limit = 4) {
		return axiosAPI.get<CategoryData>(
			`https://kitsu.io/api/edge/categories?`
		)
	},
}

export const useCategories = () => {
	const queryData = useQuery(
		'genres menu',
		() => CategoryService.getCategories(),
		{
			select: ({ data }) =>
				data.data
					.map(
						(category) =>
							({
								title: category.attributes.title,
								link: category.attributes.slug,
							}) as INavigationItem
					)
					.splice(0, 4),
			onError(error) {},
		}
	)

	return queryData
}

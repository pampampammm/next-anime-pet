import { animeSorting } from '@/app/feature/filters/model/types/types'
import { SORT_TYPE } from '@/app/shared/const/constants'
import { ListItem } from '@/app/shared/ui/Dropdown'

export const sortingNames: Record<string, string> = {
	[animeSorting[SORT_TYPE.BY_DEFAULT]]: 'By revelance',
	[animeSorting[SORT_TYPE.BY_RATTING]]: 'By ratting',
	[animeSorting[SORT_TYPE.BY_NAME]]: 'By name',
	[animeSorting[SORT_TYPE.BY_DATE]]: 'By date',
	[animeSorting[SORT_TYPE.BY_POPULARITY]]: 'By popular',
}

export const sortsListItems: ListItem<SORT_TYPE>[] = [
	{
		label: sortingNames[''],
		value: SORT_TYPE.BY_DEFAULT,
		id: 1,
	},
	{
		label: sortingNames['-name'],
		value: SORT_TYPE.BY_NAME,
		id: 3,
	},
	{
		label: sortingNames['-average_rating'],
		value: SORT_TYPE.BY_RATTING,
		id: 4,
	},
	{
		label: sortingNames['-user_count'],
		value: SORT_TYPE.BY_POPULARITY,
		id: 5,
	},
]

export const orderListItems: ListItem<'-' | '+'>[] = [
	{
		label: 'By descending',
		value: '-',
		id: 1,
	},
	{
		label: 'By increase',
		value: '+',
		id: 1,
	},
]

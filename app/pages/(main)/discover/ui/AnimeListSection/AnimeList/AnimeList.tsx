import React from 'react'

import { Anime, AnimeItem } from '@/app/entity/Anime'

import styles from './AnimeList.module.scss'
import SkeletonList from './SkeleronList/SkeletonList'

interface ListProps {
	items?: Anime[]
	isLoading: boolean
}

const AnimeList = ({ items, isLoading }: ListProps) => {
	if (isLoading || !items) {
		return <SkeletonList />
	}

	return (
		<div className={styles.list}>
			{items &&
				items.map((item) => (
					<AnimeItem
						item={item}
						isLoading={isLoading}
						key={item.id}
					/>
				))}
		</div>
	)
}

export default AnimeList

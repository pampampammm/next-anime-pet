import React from 'react'

import SkeletonList from './SkeleronList/SkeletonList'

import { AnimeCatalogItem } from '../../../model/types/types'
import AnimeItem from './AnimeItem/AnimeItem'

import styles from './AnimeList.module.scss'

interface ListProps {
	items?: AnimeCatalogItem[]
	isLoading: boolean
}

const AnimeList = ({ items, isLoading }: ListProps) => {
	if (isLoading || !items) {
		return <SkeletonList />
	}

	return (
		<div className={styles.list}>
			{items.map((item) => (
				<AnimeItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default AnimeList

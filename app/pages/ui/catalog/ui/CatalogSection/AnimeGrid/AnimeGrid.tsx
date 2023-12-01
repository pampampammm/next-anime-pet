import React from 'react'

import { HomeAnimeItem } from '@/app/pages/ui/home'

import styles from './AnimeGrid.module.scss'
import SkeletonCard from '@/app/pages/ui/home/ui/AnimeCard/Skeleton/SkeletonCard'
import AnimeCard from '@/app/pages/ui/home/ui/AnimeCard/AnimeCard'

interface GridProps {
	items?: HomeAnimeItem[]
	isLoading: boolean
}

const AnimeGrid = ({ items, isLoading }: GridProps) => {
	if (isLoading || !items) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.grid}>
					{new Array(15).fill(null).map((item, index) => (
						<SkeletonCard key={index} />
					))}
				</div>
			</div>
		)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.grid}>
				{items.map((item) => (
					<AnimeCard
						item={item}
						key={item.id}
						className={styles.item}
					/>
				))}
			</div>
		</div>
	)
}

export default AnimeGrid

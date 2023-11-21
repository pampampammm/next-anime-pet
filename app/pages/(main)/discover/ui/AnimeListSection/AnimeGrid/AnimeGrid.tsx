import React from 'react'

import { Anime, AnimeCard } from '@/app/entity/Anime'
import SkeletonCard from '@/app/entity/Anime/ui/AnimeCard/Skeleton/SkeletonCard'

import styles from './AnimeGrid.module.scss'

interface GridProps {
	items?: Anime[]
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

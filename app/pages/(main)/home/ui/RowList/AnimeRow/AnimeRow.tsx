'use client'

import React from 'react'

import { Anime, AnimeCard } from '@/app/entity/Anime'

import { MotionConfig } from 'framer-motion'

import { MaterialIconName } from '@/app/shared/icons/icons'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'

import styles from './AnimeRow.module.scss'
import SkeletonCard from '@/app/entity/Anime/ui/AnimeCard/Skeleton/SkeletonCard'

interface ListProps {
	data?: Anime[]
	isLoading?: boolean
	title?: string
	icon?: MaterialIconName
	className?: string
}

const AnimeRow = (props: ListProps) => {
	const { className, data, isLoading, title, icon } = props

	if (isLoading || !data) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.grid}>
					{new Array(6).fill(null).map((item, index) => (
						<SkeletonCard key={index} />
					))}
				</div>
			</div>
		)
	}

	return (
		<div className={styles.wrapper}>
			{icon && <MaterialIcon name={icon} />}
			<strong className={styles.title}>{title && title}</strong>
			<div className={styles.row}>
				{data &&
					data.map((item) => (
						<AnimeCard
							className={styles.item}
							item={item}
							key={item.id}
						/>
					))}
			</div>
		</div>
	)
}

export default AnimeRow

'use client'

import React from 'react'

import { MaterialIconName } from '@/app/shared/icons/icons'

import { Row } from '@/app/shared/ui/Row'
import { HomeAnimeItem } from '@/app/pages/ui/home'
import classNames from 'classnames'

import SkeletonCard from '@/app/pages/ui/home/ui/AnimeCard/Skeleton/SkeletonCard'
import AnimeCard from '../AnimeCard/AnimeCard'
import styles from './AnimeRow.module.scss'

interface ListProps {
	data: HomeAnimeItem[]
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
				<div className={styles.skelenons}>
					{new Array(6).fill(null).map((item, index) => (
						<SkeletonCard key={index} />
					))}
				</div>
			</div>
		)
	}

	return (
		<Row
			className={classNames(styles.wrapper, [className])}
			title={title}
			icon={icon}
		>
			{data &&
				data.map((item) => (
					<AnimeCard
						className={styles.item}
						item={item}
						key={item.id}
					/>
				))}
		</Row>
	)
}

export default AnimeRow

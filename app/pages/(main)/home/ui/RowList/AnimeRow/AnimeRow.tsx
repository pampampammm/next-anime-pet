'use client'

import React from 'react'

import { Anime } from '@/app/entity/Anime'

import { MotionConfig } from 'framer-motion'
import Skeleton from '../Skeleton/Skeleton'
import RowListItem from '../RowListItem/RowListItem'

import styles from './AnimeRow.module.scss'
import { MaterialIconName } from '@/app/shared/icons/icons'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'

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
		return <Skeleton skeletonClassName={styles.item} />
	}

	return (
		<div className={styles.wrapper}>
			{icon && <MaterialIcon name={icon} />}
			<strong className={styles.title}>{title && title}</strong>
			<div className={styles.row}>
				<MotionConfig>
					{data &&
						data.map((item) => (
							<RowListItem
								className={styles.item}
								item={item}
								key={item.id}
							/>
						))}
				</MotionConfig>
			</div>
		</div>
	)
}

export default AnimeRow

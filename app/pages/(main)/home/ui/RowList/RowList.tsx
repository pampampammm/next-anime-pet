'use client'

import React from 'react'

import { Anime } from '@/app/entity/Anime'

import RowListItem from '../RowList/RowListItem/RowListItem'
import Skeleton from './Skeleton/Skeleton'

import styles from './RowList.module.scss'
import { MotionConfig } from 'framer-motion'

interface ListProps {
	data?: Anime[]
	isLoading?: boolean
	title?: string
	className?: string
}

const RowList = (props: ListProps) => {
	const { className, data, isLoading, title } = props

	if (isLoading || !data) {
		return <Skeleton skeletonClassName={styles.item} />
	}

	return (
		<>
			<strong>{title && title}</strong>
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
		</>
	)
}

export default RowList

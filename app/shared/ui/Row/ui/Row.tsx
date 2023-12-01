'use client'

import React, { ReactNode } from 'react'

import { AnimeCard } from '@/app/entity/Anime'

import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
import { MaterialIconName } from '@/app/shared/icons/icons'

import styles from './Row.module.scss'

interface ListProps {
	title?: string
	icon?: MaterialIconName
	className?: string
	children?: ReactNode
}

const Row = (props: ListProps) => {
	const { className, title, icon, children } = props

	return (
		<div className={styles.wrapper}>
			{icon && <MaterialIcon name={icon} />}
			<strong className={styles.title}>{title && title}</strong>
			<div className={styles.row}>{children}</div>
		</div>
	)
}

export default Row

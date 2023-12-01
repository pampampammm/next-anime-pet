'use client'

import React, { useMemo, useRef, useState } from 'react'

import { HomeAnimeItem } from '@/app/pages/ui/home'

import { useMouseView } from '@/app/shared/hooks/useMouseView/useMouseView'

import { Image } from '@/app/shared/ui/Image'
import { AnimatePresence, motion, Variant, Variants } from 'framer-motion'
import classNames from 'classnames'

import styles from './AnimeCard.module.scss'
import SkeletonCard from '@/app/pages/ui/home/ui/AnimeCard/Skeleton/SkeletonCard'

interface ItemProps {
	item: HomeAnimeItem
	className?: string
	isLoading?: boolean
	disabled?: boolean
}

const AnimeCard = ({
	item,
	className,
	isLoading,
	disabled = false,
}: ItemProps) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [showDetails] = useMouseView(ref)

	if (isLoading) {
		return <SkeletonCard />
	}

	const { title, subTitle, rank, posterImage, link, date } = item.content

	const mods: Record<string, boolean> = {
		[styles.disabled]: disabled,
	}

	return (
		<motion.div
			ref={ref}
			className={classNames(styles.rowBlock, mods, [className])}
		>
			<Image
				className={styles.image}
				src={posterImage.originalSizePoster}
				alt={''}
				width={140}
				height={330}
			/>
			<AnimatePresence>
				{showDetails && !disabled && (
					<motion.div
						initial={{ opacity: 0.5 }}
						className={styles.details}
						whileHover={{
							opacity: 1,
							background: 'var(--item-selected-gradient)',
						}}
					>
						<p className={styles.rank}>{rank}</p>
						<strong className={styles.title}>
							<strong>{title}</strong>
							<p>{date}</p>
						</strong>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default AnimeCard

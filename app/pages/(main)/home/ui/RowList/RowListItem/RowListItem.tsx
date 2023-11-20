'use client'

import React, { useMemo, useRef, useState } from 'react'

import { Anime } from '@/app/entity/Anime'

import { Image } from '@/app/shared/ui/Image'

import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'

import styles from './RowListItem.module.scss'
import { useMouseView } from '@/app/pages/(main)/home/lib/useMouseView'

interface ItemProps {
	item: Anime
	className?: string
}

const RowListItem = ({ item, className }: ItemProps) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [showDetails] = useMouseView(ref)

	const { popularityRank, titles, slug, posterImage, startDate, endDate } =
		item.attributes

	const [title, image, year] = useMemo(() => {
		const titleToShow = titles.en === '' ? titles.en : titles.en_jp
		const imageToShow = posterImage.original
			? posterImage.original
			: posterImage.medium

		const date = new Date(startDate)
		const dateToShow = date.getFullYear()

		return [titleToShow, imageToShow, dateToShow]
	}, [item])

	return (
		<motion.div
			ref={ref}
			className={classNames(styles.rowBlock, [className])}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: [null, 1.1] }}
		>
			<Image
				className={styles.image}
				src={image}
				alt={''}
				width={140}
				height={330}
				initial={{ filter: 'blur(4px)' }}
				animate={{ filter: 'blur(0)' }}
			/>
			<AnimatePresence>
				{showDetails && (
					<motion.div
						className={styles.details}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{
							opacity: 1,
							background:
								'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(40,40,40,1) 100%)',
						}}
					>
						<p className={styles.rank}>{popularityRank}</p>
						<strong className={styles.title}>
							{title}
							<p>{year}</p>
						</strong>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default RowListItem

'use client'

import React from 'react'

import { Anime } from '@/app/entity/Anime'

import { Button } from '@/app/shared/ui/Button/Button'

import classNames from 'classnames'

import styles from './SearchAnimeList.module.scss'
import { motion } from 'framer-motion'

interface ListProps {
	items: Anime[]
	onClick?: (id: string) => void
	className?: string
}

const SearchAnimeList = (props: ListProps) => {
	const { className, items, onClick } = props

	const handleAnimeClick = (id: string) => {
		if (onClick) {
			onClick(id)
		}
	}

	if (items.length == 0) {
		return null
	}

	return (
		<ul className={classNames(styles.list, className)}>
			{items.map((item) => {
				return item.attributes.titles.en ? (
					<motion.li
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className={styles.listItem}
						key={item.id}
					>
						<Button
							className={styles.animeItem}
							onClick={() => handleAnimeClick(item.id)}
						>
							<span>{item.attributes?.titles?.en}</span>
							<h3 className={styles.rating}>
								{item.attributes.popularityRank}
							</h3>
						</Button>
					</motion.li>
				) : null
			})}
		</ul>
	)
}

export default SearchAnimeList

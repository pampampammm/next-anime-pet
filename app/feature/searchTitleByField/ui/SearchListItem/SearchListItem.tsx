'use client'

import React, { useMemo } from 'react'

import { Button } from '@/app/shared/ui/Button/Button'
import { motion } from 'framer-motion'

import { Anime } from '@/app/entity/Anime'

import styles from './SearchListItem.module.scss'
import { Image } from '@/app/shared/ui/Image'
import { SearchedAnime } from '@/app/feature/searchTitleByField/model/types/types'

interface ListItem {
	item: SearchedAnime
	isLoading?: boolean
	onClick?: (id: string) => void
}

const SearchListItem = ({ item, isLoading, onClick }: ListItem) => {
	const { id, attributes } = item
	const { popularityRank, image, title, startDate } = attributes

	const handleClick = () => {
		if (onClick) {
			onClick(item.id)
		}
	}

	return (
		<motion.li
			key={item.id}
			className={styles.listItem}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileHover={{ opacity: 0.7 }}
		>
			<Button className={styles.animeItem} onClick={handleClick}>
				<Image
					className={styles.image}
					src={image}
					alt={''}
					width={30}
					height={40}
					initial={{ filter: 'blur(4px)' }}
					animate={{ filter: 'blur(0)' }}
				/>
				<div className={styles.title}>
					<span style={{ textAlign: 'left', width: '90%' }}>
						{title}
					</span>
					<strong>{startDate}</strong>
				</div>
				<h3 className={styles.rating}>
					{item.attributes.popularityRank}
				</h3>
			</Button>
		</motion.li>
	)
}

export default SearchListItem

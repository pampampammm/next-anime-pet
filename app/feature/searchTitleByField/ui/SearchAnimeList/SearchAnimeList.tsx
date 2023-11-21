'use client'

import React from 'react'

import { Anime } from '@/app/entity/Anime'

import { Button } from '@/app/shared/ui/Button/Button'

import classNames from 'classnames'

import styles from './SearchAnimeList.module.scss'
import { motion } from 'framer-motion'
import SearchListItem from '@/app/feature/searchTitleByField/ui/SearchListItem/SearchListItem'
import { SearchedAnime } from '@/app/feature/searchTitleByField/model/types/types'

interface ListProps {
	items: SearchedAnime[]
	isLoading: boolean
	onClick?: (id: string) => void
	className?: string
}

const SearchAnimeList = (props: ListProps) => {
	const { className, items, onClick, isLoading } = props

	const handleAnimeClick = (id: string) => {
		if (onClick) {
			onClick(id)
		}
	}

	if (isLoading) {
		return <h1 className={styles.list}>loading...</h1>
	}

	return (
		<ul className={classNames(styles.list, className)}>
			{items.map((item) => {
				return item.attributes.title ? (
					<SearchListItem item={item} />
				) : null
			})}
		</ul>
	)
}

export default SearchAnimeList

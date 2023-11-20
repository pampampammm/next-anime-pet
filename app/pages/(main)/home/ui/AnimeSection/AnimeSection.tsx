'use client'

import React from 'react'

import { useAnimeCompilation } from '@/app/pages/(main)/home/model/services/useAnimeCompilation/useAnimeCompilation'

import RowList from '@/app/pages/(main)/home/ui/RowList/RowList'

import styles from './AnimeSection.module.scss'

const rowsNames: Record<number, string> = {
	0: 'Current Week',
	1: 'Most Popular',
	2: 'Best Ratting',
	3: 'Ongoing',
}

const AnimeSection = () => {
	const data = useAnimeCompilation()

	return (
		<section className={styles.section}>
			{data.map((value, index) => (
				<RowList
					key={index}
					data={value.data}
					isLoading={value.isLoading}
					title={rowsNames[index].toUpperCase()}
				/>
			))}
		</section>
	)
}

export default AnimeSection

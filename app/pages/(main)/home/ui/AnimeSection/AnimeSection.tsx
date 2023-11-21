'use client'

import React from 'react'

import { useAnimeCompilation } from '../../model/services/useAnimeCompilation/useAnimeCompilation'
import AnimeRow from '../RowList/AnimeRow/AnimeRow'

import styles from './AnimeSection.module.scss'
import { MaterialIconName } from '@/app/shared/icons/icons'

const rowsNames: Record<number, { name: string; icon: MaterialIconName }> = {
	0: { name: 'Current Week', icon: 'MdCalendarToday' },
	1: { name: 'Upcoming', icon: 'MdFireplace' },
	2: { name: 'Best Ratting', icon: 'MdRateReview' },
	3: { name: 'Ongoing', icon: 'MdCalendarMonth' },
}

const AnimeSection = () => {
	const data = useAnimeCompilation()

	return (
		<section className={styles.section}>
			{data.map((value, index) => (
				<AnimeRow
					key={index}
					data={value.data}
					isLoading={value.isLoading}
					title={rowsNames[index].name}
					icon={rowsNames[index].icon}
				/>
			))}
		</section>
	)
}

export default AnimeSection

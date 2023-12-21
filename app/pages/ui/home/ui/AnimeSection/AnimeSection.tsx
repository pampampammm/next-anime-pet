'use client'

import React, { useEffect, useState } from 'react'

import { MaterialIconName } from '@/app/shared/icons/icons'
import RatingAnimeSlider from '@/app/pages/ui/home/ui/AnimeRow/RatingAnimeSlider'

import styles from './AnimeSection.module.scss'

const rowsNames: Record<number, { name: string; icon: MaterialIconName }> = {
	0: { name: 'Popular', icon: 'MdCalendarToday' },
	1: { name: 'Upcoming', icon: 'MdFireplace' },
	2: { name: 'Most Ratting', icon: 'MdRateReview' },
}

const AnimeSection = () => {
	return (
		<section className={styles.section}>
			<RatingAnimeSlider />
			{/*<UserCountAnimeSlider />*/}
			{/*<PopularCountAnimeSlider />*/}
		</section>
	)
}

export default AnimeSection

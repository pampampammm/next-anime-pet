'use client'

import React, { useEffect, useState } from 'react'

import { useAnimeCompilation } from '../../model/services/useAnimeCompilation/useAnimeCompilation'

import { MaterialIconName } from '@/app/shared/icons/icons'

import { Button } from '@/app/shared/ui/Button/Button'

import styles from './AnimeSection.module.scss'
import { Slider } from '@/app/shared/ui/Slider'

const rowsNames: Record<number, { name: string; icon: MaterialIconName }> = {
	0: { name: 'Popular', icon: 'MdCalendarToday' },
	1: { name: 'Upcoming', icon: 'MdFireplace' },
	2: { name: 'Most Ratting', icon: 'MdRateReview' },
}

const AnimeSection = () => {
	const [currentPages, setCurrentPages] = useState<number>(0)
	const [currentPagesLimit, setCurrentPagesLimit] = useState<number>(5)

	const {
		data,
		isLoading,
		isSuccess,
		hasNextPage,
		hasPreviousPage,
		fetchNextPage,
		fetchPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
	} = useAnimeCompilation(currentPages, currentPagesLimit)

	return (
		<section className={styles.section}>
			<Slider
				data={data}
				isLoading={isLoading}
				isSuccess={isSuccess}
				onSlideNext={() => {
					setCurrentPages((prevState) => prevState + 5)
				}}
				onSlidePrevious={() => {
					setCurrentPages((prevState) => prevState - 5)
				}}
			/>

			<div className={styles.pagination}>
				<Button
					disabled={isFetchingPreviousPage}
					onClick={fetchPreviousPage}
				>
					Previous
				</Button>
				<Button disabled={isFetchingNextPage} onClick={fetchNextPage}>
					Next
				</Button>
			</div>
		</section>
	)
}

export default AnimeSection

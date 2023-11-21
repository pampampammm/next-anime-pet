'use client'

import React from 'react'

import useFilterAnime from '../../model/services/useFilterAnime/useFilterAnime'

import AnimeItem from '@/app/pages/(main)/discover/ui/AnimeListSection/AnimeItem/AnimeItem'
import SkeletonList from '@/app/pages/(main)/discover/ui/AnimeListSection/SkeleronList/SkeletonList'

import styles from './AnimeListSection.module.scss'

const AnimeListSection = () => {
	const { data, isLoading } = useFilterAnime()

	if (isLoading) {
		return <SkeletonList />
	}

	return (
		<section className={styles.section}>
			<div className={styles.list}>
				{data &&
					data.map((item) => (
						<AnimeItem
							item={item}
							isLoading={isLoading}
							key={item.id}
						/>
					))}
			</div>
		</section>
	)
}

export default AnimeListSection

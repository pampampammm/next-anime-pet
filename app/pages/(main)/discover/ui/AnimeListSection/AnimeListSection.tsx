'use client'

import React, { useState } from 'react'

import useFilterAnime from '../../model/services/useFilterAnime/useFilterAnime'

import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
import { Button } from '@/app/shared/ui/Button/Button'

import AnimeList from '../../ui/AnimeListSection/AnimeList/AnimeList'
import AnimeGrid from '../../ui/AnimeListSection/AnimeGrid/AnimeGrid'

import styles from './AnimeListSection.module.scss'

const AnimeListSection = () => {
	const { data, isLoading } = useFilterAnime()
	const [view, setView] = useState<'grid' | 'list'>('list')

	const handleGridChange = () => {
		setView('grid')
	}

	const handleListChange = () => {
		setView('list')
	}

	return (
		<section className={styles.section}>
			<div className={styles.btns}>
				<Button disabled={view === 'list'} onClick={handleListChange}>
					<MaterialIcon name={'MdList'} />
				</Button>
				<Button disabled={view === 'grid'} onClick={handleGridChange}>
					<MaterialIcon name={'MdGridOn'} />
				</Button>
			</div>
			{view === 'list' ? (
				<AnimeList items={data} isLoading={isLoading} />
			) : (
				<AnimeGrid items={data} isLoading={isLoading} />
			)}
		</section>
	)
}

export default AnimeListSection

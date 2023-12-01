'use client'

import React, { useState } from 'react'

import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
import { Button } from '@/app/shared/ui/Button/Button'

import AnimeList from './AnimeList/AnimeList'
import AnimeGrid from './AnimeGrid/AnimeGrid'

import { useAnimeFiler } from '@/app/feature/filters'

import usePagination from '../../model/services/usePagination/usePagination'

import styles from './Catalog.module.scss'

const AnimeListSection = () => {
	const { currentPage, onNextPage, onPreviousPage } = usePagination({
		contentPerPage: 15,
		count: 60,
	})

	const { data, isLoading } = useAnimeFiler({
		page: currentPage,
		contentCount: 15,
	})

	const [view, setView] = useState<'grid' | 'list'>('list')

	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<div className={styles.catalog}>
					{view === 'list' ? (
						<AnimeList items={data} isLoading={isLoading} />
					) : (
						<AnimeGrid items={data} isLoading={isLoading} />
					)}
				</div>
				<div className={styles.btns}>
					<Button
						disabled={view === 'list'}
						onClick={() => setView('list')}
					>
						<MaterialIcon name={'MdList'} />
					</Button>
					<Button
						disabled={view === 'grid'}
						onClick={() => setView('grid')}
					>
						<MaterialIcon name={'MdGridOn'} />
					</Button>
				</div>
			</div>

			<div className={styles.pagination}>
				<Button onClick={onPreviousPage}>
					<MaterialIcon name={'MdArrowLeft'} />
				</Button>
				<span>{currentPage / 15 + 1}</span>
				<Button onClick={onNextPage}>
					<MaterialIcon name={'MdArrowRight'} />
				</Button>
			</div>
		</section>
	)
}

export default AnimeListSection

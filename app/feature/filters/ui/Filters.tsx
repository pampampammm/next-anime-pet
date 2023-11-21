'use client'

import React from 'react'

import { Dropdown } from '@/app/shared/ui/Dropdown'

import styles from './Filters.module.scss'

const Filters = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h3>Filters</h3>
				<div className={styles.dropdownGroup}>
					<div className={styles.dropdown}>
						<label>Genres : </label>
						<Dropdown
							items={[
								{ label: '324', id: '23213' },
								{ label: '463', id: '242213' },
								{ label: '2534', id: '723' },
								{ label: '2434', id: '423' },
								{ label: '2324', id: '253' },
								{ label: '2134', id: '233' },
							]}
						/>
					</div>
					<div className={styles.dropdown}>
						<label>Genres: </label>
						<Dropdown
							items={[
								{ label: '324', id: '23213' },
								{ label: '463', id: '242213' },
								{ label: '2534', id: '723' },
								{ label: '2434', id: '423' },
								{ label: '2324', id: '253' },
								{ label: '2134', id: '233' },
							]}
						/>
					</div>
				</div>
				<div className={styles.sortingGroup}>
					<div className={styles.sorting}>
						<label>Sorting by: </label>
						<Dropdown
							icon={'MdStairs'}
							items={[
								{ label: '324', id: '23213' },
								{ label: '463', id: '242213' },
								{ label: '2534', id: '723' },
								{ label: '2434', id: '423' },
								{ label: '2324', id: '253' },
								{ label: '2134', id: '233' },
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filters

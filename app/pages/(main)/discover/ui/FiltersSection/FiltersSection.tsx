import React from 'react'

import { Filters } from '@/app/feature/filters'

import styles from './FiltersSection.module.scss'

const FiltersSection = () => {
	return (
		<section className={styles.section}>
			<Filters />
		</section>
	)
}

export default FiltersSection

import React from 'react'

import { SearchField } from '@/app/feature/searchTitleByField'

import styles from './SearchSection.module.scss'

const SearchSection = () => {
	return (
		<section className={styles.section}>
			<SearchField />
		</section>
	)
}

export default SearchSection

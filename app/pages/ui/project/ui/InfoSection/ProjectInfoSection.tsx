'use project'

import React from 'react'

import styles from './ProjectInfoSection.module.scss'

const ProjectInfoSection = () => {
	const { data, isLoading } = useAnime('1244')

	if (isLoading || !data) {
		return <h1>...Loading</h1>
	}

	return (
		<section className={styles.section}>
			{data.id}
			{data.attributes.titles.en}
		</section>
	)
}

export default ProjectInfoSection

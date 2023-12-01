import React from 'react'
import ProjectInfoSection from './InfoSection/ProjectInfoSection'
import { Navigation } from '@/app/widgets/Navigation'
import Meta from '@/app/meta/ui/Meta'

const ProjectPage = () => {
	return (
		<Meta title={'Project'} description={'project fucking page'}>
			<Navigation />
			<ProjectInfoSection />
		</Meta>
	)
}

export default ProjectPage

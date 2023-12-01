import { FC } from 'react'

import { Meta } from '@/app/meta'

import FiltersSection from './FiltersSection/FiltersSection'
import CatalogSection from './CatalogSection/CatalogSection'
import { Navigation } from '@/app/widgets/Navigation'

const CatalogPage: FC = () => {
	return (
		<Meta title={'Anime'} description={'Anime search'}>
			<Navigation />
			<FiltersSection />
			<CatalogSection />
		</Meta>
	)
}

export default CatalogPage

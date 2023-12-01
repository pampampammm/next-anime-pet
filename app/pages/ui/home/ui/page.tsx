import { FC } from 'react'

import Meta from '@/app/meta/ui/Meta'
import AnimeSection from './AnimeSection/AnimeSection'

import { Navigation } from '@/app/widgets/Navigation'

const HomePage: FC = () => {
	return (
		<Meta title={'Anime'} description={'Anime search'}>
			<Navigation />
			<AnimeSection />
		</Meta>
	)
}

export default HomePage

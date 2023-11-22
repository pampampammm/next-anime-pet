import type { NextPage } from 'next'

import { Meta } from '@/app/meta'

import FiltersSection from './ui/FiltersSection/FiltersSection'
import AnimeListSection from './ui/AnimeListSection/AnimeListSection'

export default function DiscoverPage() {
	return (
		<Meta title={'Anime'} description={'Anime search'}>
			{/*<AboutSection />*/}
			<FiltersSection />
			<AnimeListSection />
		</Meta>
	)
}

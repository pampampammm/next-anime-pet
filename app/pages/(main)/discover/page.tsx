import Meta from '../../../meta/ui/Meta'
import AnimeListSection from '@/app/pages/(main)/discover/ui/AnimeListSection/AnimeListSection'
import FiltersSection from './ui/FiltersSection/FiltersSection'

export default function DiscoverPage() {
	return (
		<Meta title={'Anime'} description={'Anime search'}>
			{/*<AboutSection />*/}
			<FiltersSection />
			<AnimeListSection />
		</Meta>
	)
}

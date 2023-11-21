import Meta from '../../../meta/ui/Meta'
import AnimeListSection from '@/app/pages/(main)/discover/ui/AnimeListSection/AnimeListSection'

export default function DiscoverPage() {
	return (
		<Meta title={'Anime'} description={'Anime search'}>
			{/*<AboutSection />*/}
			{/*<FiltersSection />*/}
			<AnimeListSection />
		</Meta>
	)
}

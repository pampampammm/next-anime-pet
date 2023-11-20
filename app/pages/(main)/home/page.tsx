import Meta from '@/app/meta/ui/Meta'

import { PageHeader } from '@/app/widgets/PageHeader'
import SearchSection from './ui/SearchSection/SearchSection'
import AnimeSection from '@/app/pages/(main)/home/ui/AnimeSection/AnimeSection'

export default function HomePage() {
	return (
		<Meta title={'Anime'} description={'Anime search'}>
			<AnimeSection />
			<SearchSection />
		</Meta>
	)
}

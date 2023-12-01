import { Anime } from '@/app/entity/Anime'
import { AnimeItem } from '@/app/pages/model/types/types'

export interface HomeStaticProps {
	slides: HomeSlide[]
	content: {
		popularItems: Anime[]
		upcomingItems: Anime[]
		ratingItems: Anime[]
	}
}

export interface HomeAnimeItem extends AnimeItem {}

export interface HomeSlide {
	id: string
	title: string
	link: string
	rating: string
	bigPoster: string
}

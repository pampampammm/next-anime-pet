import { Anime } from '@/app/entity/Anime'
import { AnimeAttributes } from '@/app/entity/Anime/model/types/types'

export interface SearchAnimeAttributes
	extends Pick<AnimeAttributes, 'popularityRank' | 'startDate'> {
	title?: string
	image: string
}

export interface SearchedAnime extends Pick<Anime, 'id'> {
	slug: string
	attributes: SearchAnimeAttributes
}

export interface AnimeData {
	data: Anime[]
	meta?: number
}

export interface Anime {
	id: string
	attributes: {
		titles: {
			en: string
			en_jp: string
			ja_jp: string
		}
		slug: string
		popularityRank: string
		posterImage: {
			tiny: string
			small: string
			medium: string
			large: string
			original: string
		}
		startDate: string
		endDate: string
	}
}

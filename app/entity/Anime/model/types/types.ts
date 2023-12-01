export interface Anime {
	id: string
	attributes: AnimeAttributes
}

export interface AnimeAttributes {
	titles: {
		en: string
		en_jp: string
		ja_jp: string
	}
	slug: string
	popularityRank: string
	posterImage: {
		tiny?: string
		small?: string
		medium?: string
		large?: string
		original?: string
	}
	startDate: string | number
	endDate: string
}

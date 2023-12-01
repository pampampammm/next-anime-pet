export interface AnimeItem {
	id: string
	content: {
		date: string
		title: string
		subTitle?: string
		posterImage: {
			originalSizePoster: string
			lowSizePoster: string
		}
		rank: string
		link: string
	}
}

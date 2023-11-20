export interface CategoryData {
	data: Category[]
}

export interface Category {
	id: string
	type: string
	attributes: {
		title: string
		slug: string
	}
}

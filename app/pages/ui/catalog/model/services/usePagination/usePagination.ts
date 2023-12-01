import { useState } from 'react'
import { useAnime } from '@/app/entity/Anime'

interface PaginationProps {
	contentPerPage: number
	count: number
}

const usePagination = ({ contentPerPage, count }: PaginationProps) => {
	const [currentPage, setCurrentPage] = useState<number>(0)
	const pageCount = Math.ceil(count / contentPerPage)

	const lastContentIndex = currentPage * contentPerPage
	const firstContentIndex = lastContentIndex - contentPerPage

	const switchPage = (flag: boolean) => {
		setCurrentPage((state) => {
			if (flag) {
				if (state === pageCount) {
					return state
				}
				return state + contentPerPage
			} else {
				if (state === 1) {
					return state
				}
				return state - contentPerPage
			}
		})
	}

	return {
		onNextPage: () => switchPage(true),
		onPreviousPage: () => switchPage(false),
		currentPage,
		count,
	}
}

export default usePagination

'use client'

import React, { useState } from 'react'

import { MaterialIconName } from '@/app/shared/icons/icons'

import { Slider } from '@/app/shared/ui/Slider'
import { useAnimeCompilation } from '@/app/pages/ui/home/model/services/useAnimeCompilation/useAnimeCompilation'

interface ListProps {
	title?: string
	icon?: MaterialIconName
	className?: string
}

const RatingAnimeSlider = (props: ListProps) => {
	const { className, title, icon } = props

	const [state, setState] = useState(0)

	const {
		data,
		isLoading,
		isSuccess,
		fetchNextPage,
		fetchPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
	} = useAnimeCompilation(0)

	const handleItemsEnd = () => {
		setState((prevState) => prevState + 1)
		if (state <= 3) {
			fetchNextPage()
		}
	}

	// console.log(data?.pages.map((item) => item.data))

	return (
		<div>
			<Slider
				// @ts-ignore
				data={data}
				isLoading={isLoading}
				isSuccess={isSuccess}
				onItemsEnd={handleItemsEnd}
				onSlideNext={fetchNextPage}
				onSlidePrevious={fetchPreviousPage}
				leftButtonEnabled={isFetchingPreviousPage}
				rightButtonEnabled={isFetchingNextPage}
				itemsAmountToRender={7}
			/>
		</div>
	)
}

export default RatingAnimeSlider

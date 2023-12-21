import { inspect } from 'util'
import React, {
	ReactNode,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react'

import { Button } from '@/app/shared/ui/Button/Button'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
import { AnimatePresence, motion } from 'framer-motion'
import AnimeCard from '@/app/pages/ui/home/ui/AnimeCard/AnimeCard'

import styles from './Slider.module.scss'
import { AnimeItem } from '@/app/pages/model/types/types'
import classNames from 'classnames'
import SkeletonCard from '@/app/pages/ui/home/ui/AnimeCard/Skeleton/SkeletonCard'

interface SliderProps {
	data: AnimeItem[]
	children?: ReactNode
	isLoading: boolean
	isSuccess: boolean
	onSlideNext?: () => void
	onSlidePrevious?: () => void
	onItemsEnd?: () => void
	leftButtonEnabled?: boolean
	rightButtonEnabled?: boolean
	itemsAmountToRender?: number
	endOffset?: number
}

export interface SliderPage {
	data: AnimeItem[]
	prevData?: number[]
}

const CardParams = {
	height: 290,
	width: 210 + 14,
}

function toInteger(number: number) {
	return Math.round(
		// round to nearest integer
		Number(number) // type cast your input
	)
}

const Slider = <T,>(props: SliderProps) => {
	const {
		data,
		isLoading,
		onSlideNext,
		onSlidePrevious,
		onItemsEnd,
		leftButtonEnabled,
		rightButtonEnabled,
		endOffset = 0,
		itemsAmountToRender = 10,
	} = props

	//const [itemsToRender, setItemsToRender] = useState<HomeAnimeItem[]>([])

	const [itemsAmount, setItemsAmount] = useState<number>(0)
	const [slideOffset, setSlideOffset] = useState<number>(0)
	const [slideStep] = useState<number>(1)
	const [slidePages, setSlidesPage] = useState(0)

	useEffect(() => {
		if (data) {
			setItemsAmount(data.length)
			setSlidesPage(data.length / itemsAmountToRender)
		}
	}, [isLoading, data])

	const [transformPositionOffset] = useMemo(() => {
		const allItemsWidth = itemsAmountToRender * CardParams.width

		const max = CardParams.width * itemsAmount - allItemsWidth

		const offset =
			slideOffset * allItemsWidth <= 0 ? 0 : slideOffset * allItemsWidth
		const maxOffset = offset >= max ? max : offset

		return [maxOffset]
	}, [slideOffset, itemsAmount, slideStep])

	const [indexToRender] = useMemo(() => {
		const numbers: number[] = []

		const min =
			slideOffset * itemsAmountToRender + itemsAmountToRender >
			itemsAmount
				? itemsAmount - itemsAmountToRender
				: slideOffset * itemsAmountToRender
		const end = min + itemsAmountToRender

		const start = min >= 0 ? min : min

		for (let i = start; i < end; i++) {
			numbers.push(toInteger(i))
		}

		return [[...numbers]]
	}, [itemsAmount, slideOffset])

	const handleSlide = (direction: 'next' | 'previous') => {
		if (direction === 'next') {
			const isPagesWillEnd = slideOffset + slideStep >= slidePages

			if (isPagesWillEnd && onItemsEnd) {
				onItemsEnd()
				setSlideOffset((prevState) => prevState + slideStep)
			}

			if (!isPagesWillEnd) {
				setSlideOffset((prevState) => prevState + slideStep)

				if (onSlideNext) {
					onSlideNext()
				}
			}
		}

		if (direction === 'previous') {
			const page = slidePages
			const offset = slideOffset + 1

			const newValue = offset > page ? page - 1 : offset - slideStep
			const value = newValue - 1 <= 0 ? 0 : newValue - 1

			setSlideOffset(value)
		}
	}

	const renderItemsByIndex = useMemo(() => {
		if (isLoading) {
			return null
		}

		const dataToRender = data.map((anime, index) => {
			if (!indexToRender.includes(index)) {
				return (
					<motion.li
						animate={{ scaleY: 0.8 }}
						className={styles.slideItem}
						key={anime.id}
					>
						<AnimeCard item={anime} />
					</motion.li>
				)
			}

			return (
				<li className={styles.slideItem} key={anime.id}>
					<AnimeCard item={anime} />
				</li>
			)
		})

		return (
			<AnimatePresence>
				<motion.ul
					style={{ width: CardParams.width * itemsAmountToRender }}
					animate={{
						x: -transformPositionOffset,
					}}
					className={styles.rowWrapper}
				>
					{dataToRender}
				</motion.ul>
			</AnimatePresence>
		)
	}, [itemsAmount, data, isLoading, slideOffset])

	return (
		<article className={styles.wrapper}>
			<div className={styles.buttons}>
				<motion.div
					className={styles.leftButton}
					whileHover={{ scale: 1.3 }}
				>
					<Button
						disabled={leftButtonEnabled}
						className={styles.leftButton}
						onClick={() => handleSlide('previous')}
					>
						<MaterialIcon name={'MdArrowLeft'} />
					</Button>{' '}
				</motion.div>
				<motion.div
					className={styles.leftButton}
					whileHover={{ scale: 1.3 }}
				>
					<Button
						disabled={rightButtonEnabled}
						className={styles.rightButton}
						onClick={() => handleSlide('next')}
					>
						<MaterialIcon name={'MdArrowRight'} />
					</Button>
				</motion.div>
			</div>
			{renderItemsByIndex}
		</article>
	)
}

export default Slider

// const renderItemsByPosition = useMemo(() => {
// 	if (isLoading) {
// 		return null
// 	}
//
// 	// const
// 	// const dataToRender = (itemsToRender % itemsAmount) !== 0? data.
//
// 	return (
// 		<AnimatePresence>
// 			<motion.ul
// 				className={styles.rowWrapper}
// 				style={{ width: CardParams.width * itemsAmountToRender }}
// 				initial={{ x: 0 }}
// 				animate={{
// 					x: -transformPositionOffset,
// 				}}
// 			>
// 				{data.map((anime, index) => {
// 					return (
// 						<motion.li
// 							key={anime.id}
// 							className={classNames(styles.slideItem)}
// 						>
// 							<AnimeCard item={anime} isLoading={isLoading} />
// 						</motion.li>
// 					)
// 				})}
// 			</motion.ul>
// 		</AnimatePresence>
// 	)
// }, [data, isLoading, slideOffset, itemsAmountToRender, itemsAmount])

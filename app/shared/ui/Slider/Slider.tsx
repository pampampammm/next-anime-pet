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

interface SliderProps {
	data: AnimeItem[]
	children?: ReactNode
	isLoading: boolean
	isSuccess: boolean
	onSlideNext: () => void
	onSlidePrevious: () => void
}

export interface SliderPage {
	data: AnimeItem[]
	prevData?: number[]
}

const Slider = <T,>(props: SliderProps) => {
	const { data, isLoading, onSlideNext, onSlidePrevious } = props

	//const [itemsToRender, setItemsToRender] = useState<HomeAnimeItem[]>([])

	const [leftButton, setLeftButton] = useState<boolean>(false)
	const [rightButton, setRightButton] = useState<boolean>(true)
	const [slideDirection, setSlideDirection] = useState<1 | -1>(1)

	const [itemsAmount, setItemsAmount] = useState<number>(0)
	const [slideOffset, setSlideOffset] = useState<number>(0)
	const [slideStep] = useState<number>(1)

	useEffect(() => {
		if (data) {
			setItemsAmount(data.length)
		}

		// if (page === 0) {
		// 	setLeftButton(false)
		// 	return
		// } else {
		// 	setLeftButton(true)
		// }
		//
		// if (page === itemsAmount) {
		// 	setLeftButton(false)
		// 	return
		// } else {
		// 	setLeftButton(true)
		// }
	}, [isLoading, data])

	const [indexToRender] = useMemo(() => {
		const numbers: number[] = []

		const max = itemsAmount - (itemsAmount % (slideOffset + slideStep))

		for (let i = slideOffset; i < slideOffset + slideStep; i++) {
			// if (i < slideOffset + slideOffset) {
			// }
			numbers.push(i)
		}

		return [[...numbers]]
	}, [itemsAmount, slideOffset])

	const [transformOffset] = useMemo(() => {
		const max = 140 * itemsAmount - 1400

		const offset = slideOffset * 1400 <= 0 ? 0 : slideOffset * 1400
		const maxOffset = offset >= max ? max : offset

		return [maxOffset]
	}, [slideOffset, itemsAmount, slideStep])

	const handleSlide = (direction: 'next' | 'previous') => {
		if (direction === 'next') {
			setSlideDirection(1)
			onSlideNext()

			setSlideOffset((prevState) => prevState + slideStep)
		}

		if (direction === 'previous') {
			setSlideDirection(-1)
			onSlidePrevious()

			if (slideOffset - slideStep >= 0) {
				setSlideOffset((prevState) => prevState - slideStep)
			}
		}
	}

	const renderItemsByIndex = useMemo(() => {
		if (isLoading) {
			return <h1>Loading...</h1>
		}

		return data.map((anime, index) => {
			// const mods: Record<string, boolean> = {
			// 	[styles.focusedItem]: !indexToRender.includes(index),
			// }

			return (
				<motion.li
					key={anime.id}
					className={classNames(styles.slideItem)}
				>
					<AnimeCard item={anime} isLoading={isLoading} />
				</motion.li>
			)
		})
	}, [data, isLoading, slideOffset])

	return (
		<article className={styles.wrapper}>
			<div className={styles.buttons}>
				<Button
					className={styles.leftButton}
					onClick={() => handleSlide('previous')}
				>
					<MaterialIcon name={'MdArrowLeft'} />
				</Button>
				<Button
					className={styles.rightButton}
					onClick={() => handleSlide('next')}
				>
					<MaterialIcon name={'MdArrowRight'} />
				</Button>
			</div>
			<AnimatePresence>
				<motion.ul
					className={styles.rowWrapper}
					initial={{ x: 0 }}
					animate={{
						x: -transformOffset,
					}}
				>
					{renderItemsByIndex}
				</motion.ul>
			</AnimatePresence>
		</article>
	)
}

export default Slider

// const [indexToRender] = useMemo(() => {
// 	const numbers: number[] = []
// 	for (let i = currentPagesSlide; i < slideAmount; i++) {
// 		if (i < showAmount + currentPagesSlide) {
// 			numbers.push(i)
// 		}
// 	}
// 	return [[...numbers]]
// }, [currentPagesSlide, showAmount, slideAmount])

// const skeletons = useMemo(() => {
// 	return new Array(6).fill(null).map((_, index) => (
// 		<motion.div
// 			initial={{ x: 500 * slideDirection }}
// 			animate={{ x: 0 }}
// 			key={index}
// 			className={styles.slideItem}
// 		>
// 			<SkeletonCard key={index} />
// 		</motion.div>
// 	))
// }, [])

// const renderItems = useMemo(
// 	() =>
// 		data &&
// 		data.map((value, index) => (
// 			<motion.div
// 				initial={{ x: 500 * slideDirection }}
// 				animate={{ x: 0 }}
// 				key={value.id}
// 				className={styles.slideItem}
// 			>
// 				<AnimeCard item={value} />
// 			</motion.div>
// 		)),
// 	[data, isLoading]
// )

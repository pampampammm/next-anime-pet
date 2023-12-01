// import { inspect } from 'util'
//
// import styles from './Slider.module.scss'
//
// import React, { ReactNode, useMemo, useState } from 'react'
// import { Button } from '@/app/shared/ui/Button/Button'
// import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
// import { AnimeItem } from '@/app/pages/model/types/types'
// import { HomeAnimeItem } from '@/app/pages/ui/home'
// import { AnimatePresence, motion } from 'framer-motion'
// import AnimeCard from '@/app/pages/ui/home/ui/AnimeCard/AnimeCard'
// import SkeletonCard from '@/app/pages/ui/home/ui/AnimeCard/Skeleton/SkeletonCard'
//
// interface SliderProps {
// 	data: HomeAnimeItem[]
// 	isLoading: boolean
// 	onSlideNext: () => void
// 	onSlidePrevious: () => void
// }
//
// const StaticSlider = <T,>(props: SliderProps) => {
// 	const { data, isLoading, onSlideNext, onSlidePrevious } = props
//
// 	const [renderArrow, serRenderArrow] = useState<boolean>(false)
//
// 	const [leftButton, setLeftButton] = useState<boolean>(false)
// 	const [rightButton, setRightButton] = useState<boolean>(true)
// 	const [slideDirection, setSlideDirection] = useState<1 | -1>(1)
//
// 	const [itemsAmount, setItemsAmount] = useState<number>(0)
// 	const [slideOffset, setSlideOffset] = useState<number>(0)
// 	const [slideStep] = useState<number>(5)
//
// 	const [indexToRender] = useMemo(() => {
// 		const numbers: number[] = []
//
// 		const max = itemsAmount - (itemsAmount % (slideOffset + slideStep))
//
// 		for (let i = slideOffset; i < slideOffset + slideStep; i++) {
// 			// if (i < slideOffset + slideOffset) {
// 			// }
// 			numbers.push(i)
// 		}
//
// 		return [[...numbers]]
// 	}, [itemsAmount, slideOffset])
//
// 	const handleSlide = (direction: 'next' | 'previous') => {
// 		if (direction === 'next') {
// 			onSlideNext()
//
// 			if (currentPagesSlide + showAmount < slideAmount) {
// 				setCurrentPagesSlide((prevState) => prevState + showAmount)
// 			}
//
// 			// // const newStart =
// 			// // 	start + showAmount < slideAmount
// 			// // 		? setStart((prevState) => prevState + showAmount)
// 			// // 		: se
// 		}
//
// 		if (direction === 'previous') {
// 			onSlidePrevious()
//
// 			if (currentPagesSlide - showAmount >= 0) {
// 				setCurrentPagesSlide((prevState) => prevState - showAmount)
// 			}
// 		}
// 	}
//
// 	const skeletons = useMemo(() => {
// 		return new Array(6).fill(null).map((_, index) => (
// 			<motion.div
// 				initial={{ x: 500 * slideDirection }}
// 				animate={{ x: 0 }}
// 				key={index}
// 			>
// 				<SkeletonCard key={index} />
// 			</motion.div>
// 		))
// 	}, [])
//
// 	const renderItems = useMemo(
// 		() =>
// 			data &&
// 			data.map((value, index) => (
// 				<motion.div
// 					initial={{ x: 500 * slideDirection }}
// 					animate={{ x: 0 }}
// 					key={value.id}
// 				>
// 					<AnimeCard item={value} />
// 				</motion.div>
// 			)),
// 		[data, isLoading]
// 	)
//
// 	return (
// 		<div className={styles.wrapper}>
// 			<div className={styles.buttons}>
// 				<Button
// 					className={styles.button}
// 					onClick={() => handleSlide('previous')}
// 				>
// 					<MaterialIcon name={'MdArrowLeft'} />
// 				</Button>
// 				<Button
// 					className={styles.button}
// 					onClick={() => handleSlide('next')}
// 				>
// 					<MaterialIcon name={'MdArrowRight'} />
// 				</Button>
// 			</div>
// 			<AnimatePresence>
// 				<motion.div className={styles.rowWrapper}>
// 					{isLoading ? skeletons : renderItems}
// 				</motion.div>
// 			</AnimatePresence>
// 		</div>
// 	)
// }
//
// // {data.map((value) => (
// // 	<AnimeCard
// // 		key={value.id}
// // 		item={value}
// // 		isLoading={isLoading}
// // 	/>
// // ))}
//
// export default StaticSlider

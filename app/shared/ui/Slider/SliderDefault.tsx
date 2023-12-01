// import { inspect } from 'util'
// import React, {
// 	ReactNode,
// 	useEffect,
// 	useLayoutEffect,
// 	useMemo,
// 	useState,
// } from 'react'
//
// import { Button } from '@/app/shared/ui/Button/Button'
// import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
// import { HomeAnimeItem } from '@/app/pages/ui/home'
// import { AnimatePresence, motion } from 'framer-motion'
// import AnimeCard from '@/app/pages/ui/home/ui/AnimeCard/AnimeCard'
//
// import styles from './Slider.module.scss'
//
// interface SliderProps {
// 	data: HomeAnimeItem[]
// 	children?: ReactNode
// 	isLoading: boolean
// 	isSuccess: boolean
// 	onSlideNext: () => void
// 	onSlidePrevious: () => void
// 	page: number
// 	slidesAmount: number
// }
//
// const Slider = <T,>(props: SliderProps) => {
// 	const { data, isLoading, onSlideNext, onSlidePrevious, page, isSuccess } =
// 		props
//
// 	//const [itemsToRender, setItemsToRender] = useState<HomeAnimeItem[]>([])
//
// 	const [slideDirection, setSlideDirection] = useState<1 | -1>(1)
// 	const [leftButton, setLeftButton] = useState<boolean>(false)
// 	const [rightButton, setRightButton] = useState<boolean>(true)
//
// 	useEffect(() => {
// 		if (page === 0) {
// 			setLeftButton(false)
// 			return
// 		}
//
// 		setLeftButton(true)
// 	}, [page, isLoading, data])
//
// 	const handleSlide = (direction: 'next' | 'previous') => {
// 		if (direction === 'next') {
// 			setSlideDirection(1)
// 			onSlideNext()
// 			//setItemsToRender([...itemsToRender, ...data])
// 		}
//
// 		if (direction === 'previous') {
// 			setSlideDirection(-1)
// 			onSlidePrevious()
// 		}
// 	}
//
// 	const [currentPagesSlide, setCurrentPagesSlide] = useState<number>(page)
// 	const isStart = currentPagesSlide == 0
//
// 	const renderItemsByIndex = useMemo(() => {
// 		return (
// 			data &&
// 			data.map((value, index) => (
// 				<motion.li key={value.id} className={styles.slideItem}>
// 					<AnimeCard item={value} isLoading={isLoading} />
// 				</motion.li>
// 			))
// 		)
// 	}, [data, isLoading])
//
// 	return (
// 		<article className={styles.wrapper}>
// 			<div className={styles.buttons}>
// 				<Button
// 					className={styles.leftButton}
// 					onClick={() => handleSlide('previous')}
// 					disabled={!leftButton}
// 				>
// 					<MaterialIcon name={'MdArrowLeft'} />
// 				</Button>
// 				<Button
// 					className={styles.rightButton}
// 					onClick={() => handleSlide('next')}
// 				>
// 					<MaterialIcon name={'MdArrowRight'} />
// 				</Button>
// 			</div>
// 			<AnimatePresence>
// 				<motion.ul className={styles.rowWrapper}>
// 					{renderItemsByIndex}
// 				</motion.ul>
// 			</AnimatePresence>
// 		</article>
// 	)
// }
//
// export default Slider
//
// // const [indexToRender] = useMemo(() => {
// // 	const numbers: number[] = []
// // 	for (let i = currentPagesSlide; i < slideAmount; i++) {
// // 		if (i < showAmount + currentPagesSlide) {
// // 			numbers.push(i)
// // 		}
// // 	}
// // 	return [[...numbers]]
// // }, [currentPagesSlide, showAmount, slideAmount])
//
// // const skeletons = useMemo(() => {
// // 	return new Array(6).fill(null).map((_, index) => (
// // 		<motion.div
// // 			initial={{ x: 500 * slideDirection }}
// // 			animate={{ x: 0 }}
// // 			key={index}
// // 			className={styles.slideItem}
// // 		>
// // 			<SkeletonCard key={index} />
// // 		</motion.div>
// // 	))
// // }, [])
//
// // const renderItems = useMemo(
// // 	() =>
// // 		data &&
// // 		data.map((value, index) => (
// // 			<motion.div
// // 				initial={{ x: 500 * slideDirection }}
// // 				animate={{ x: 0 }}
// // 				key={value.id}
// // 				className={styles.slideItem}
// // 			>
// // 				<AnimeCard item={value} />
// // 			</motion.div>
// // 		)),
// // 	[data, isLoading]
// // )

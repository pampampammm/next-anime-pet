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
// import { UseQueryResult } from 'react-query'
//
// import styles from './Slider.module.scss'
//
// interface SliderProps {
// 	data:  UseQueryResult<HomeAnimeItem[], unknown>
// 	children?: ReactNode
// 	onSlideNext: () => void
// 	onSlidePrevious: () => void
// 	slidesAmount: number
// 	page: number
// }
//
// const QuerySlider = <T,>(props: SliderProps) => {
// 	const { data, isLoading, onSlideNext, onSlidePrevious, page } =
// 		props
//
// 	const [currentPages, setCurrentPages] = useState<number>(0)
// 	const [currentPagesLimit, setCurrentPagesLimit] = useState<number>(7)
//
// 	const [itemsToRender, setItemsToRender] = useState<HomeAnimeItem[]>([])
//
// 	const [slideDirection, setSlideDirection] = useState<1 | -1>(1)
//
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
// 					<AnimeCard
// 						disabled={index === 0}
// 						item={value}
// 						isLoading={isLoading}
// 					/>
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
// export default QuerySlider

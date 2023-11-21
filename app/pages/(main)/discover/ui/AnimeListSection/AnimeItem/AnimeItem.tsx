import React, { useMemo } from 'react'

import styles from './AnimeItem.module.scss'
import { Anime } from '@/app/entity/Anime'
import { Image } from '@/app/shared/ui/Image'
import { motion } from 'framer-motion'
import { Button, ButtonTheme } from '@/app/shared/ui/Button/Button'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'

interface ItemProps {
	item: Anime
	isLoading: boolean
}

const AnimeItem = (props: ItemProps) => {
	const { isLoading, item } = props

	const { popularityRank, titles, posterImage, startDate, endDate } =
		item.attributes

	const [enTitle, jpTitle, image, year] = useMemo(() => {
		const enTitle = titles.en === '' ? titles.en : titles.en_jp
		const jpTitle = titles.ja_jp === '' ? '' : titles.ja_jp
		const imageToShow = posterImage.original
			? posterImage.original
			: posterImage.medium

		const date = new Date(startDate)
		const dateToShow = date.getFullYear()

		return [enTitle, jpTitle, imageToShow, dateToShow]
	}, [item])

	return (
		<motion.div
			whileHover={{
				scale: 1.01,
				opacity: 0.9,
				backgroundColor: '#1e1e1e',
			}}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			className={styles.wrapper}
		>
			<Image
				className={styles.img}
				src={image}
				alt={''}
				width={100}
				height={150}
				initial={{ filter: 'blur(4px)' }}
				animate={{ filter: 'blur(0px)' }}
			/>
			<div className={styles.content}>
				<div className={styles.main}>
					<h3>{enTitle}</h3>
					<h4>{`${jpTitle}, ${year}`}</h4>
				</div>
				<div className={styles.user}>
					<span className={styles.rank}>{popularityRank}</span>
					<Button theme={ButtonTheme.OUTLINE}>
						<MaterialIcon name={'MdFavorite'} />
					</Button>
				</div>
			</div>
		</motion.div>
	)
}

export default AnimeItem

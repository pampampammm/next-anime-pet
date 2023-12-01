import React, { useMemo } from 'react'

import { motion } from 'framer-motion'
import { Button, ButtonTheme } from '@/app/shared/ui/Button/Button'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
import classNames from 'classnames'

import { AnimeCatalogItem } from '@/app/pages/ui/catalog/model/types/types'

import styles from './AnimeItem.module.scss'
import { Image } from '@/app/shared/ui/Image'

interface ItemProps {
	item: AnimeCatalogItem
	className?: string
}

const AnimeItem = ({ item }: ItemProps) => {
	const { rank, link, posterImage, subTitle, title, date } = item.content

	return (
		<motion.div
			whileHover={{
				scale: 1.01,
				opacity: 0.9,
				backgroundColor: '#1e1e1e',
			}}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			className={classNames(styles.wrapper)}
		>
			<Image
				className={styles.img}
				src={posterImage?.originalSizePoster}
				alt={''}
				width={100}
				height={150}
				initial={{ filter: 'blur(4px)' }}
				animate={{ filter: 'blur(0px)' }}
			/>
			<div className={styles.content}>
				<div className={styles.main}>
					<h3>{title}</h3>
					<h4>{`${subTitle}, ${date}`}</h4>
				</div>
				<div className={styles.user}>
					<span className={styles.rank}>{rank}</span>
					<Button theme={ButtonTheme.OUTLINE}>
						<MaterialIcon name={'MdFavorite'} />
					</Button>
				</div>
			</div>
		</motion.div>
	)
}

export default AnimeItem

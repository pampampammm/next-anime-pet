import React from 'react'

import classNames from 'classnames'
import { motion } from 'framer-motion'

import styles from './SkeletonCard.module.scss'

interface SkeletonProps {
	skeletonClassName?: string
	amount?: number
}

const SkeletonCard = (props: SkeletonProps) => {
	const { amount = 6, skeletonClassName } = props

	return (
		<motion.div className={styles.wrapper}>
			<div className={classNames(styles.skeleton, [skeletonClassName])} />
		</motion.div>
	)
}

export default SkeletonCard

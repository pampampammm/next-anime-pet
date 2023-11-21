import React from 'react'

import styles from './Skeleton.module.scss'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface SkeletonProps {
	skeletonClassName?: string
	amount?: number
}

const SkeletonCard = (props: SkeletonProps) => {
	const { amount = 6, skeletonClassName } = props

	return (
		<motion.div
			initial={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			className={styles.wrapper}
		>
			<div className={classNames(styles.skeleton, [skeletonClassName])} />
		</motion.div>
	)
}

export default SkeletonCard

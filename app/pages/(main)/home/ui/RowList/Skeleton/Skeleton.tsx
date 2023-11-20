import React from 'react'

import styles from './Skeleton.module.scss'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface SkeletonProps {
	skeletonClassName?: string
	amount?: number
}

const Skeleton = (props: SkeletonProps) => {
	const { amount = 6, skeletonClassName } = props

	return (
		<div className={styles.wrapper}>
			{new Array(amount).fill(null).map((item, index) => (
				<motion.div
					className={classNames(styles.skeleton, [skeletonClassName])}
					key={index}
					initial={{ opacity: 1, scale: 1 }}
					animate={{ opacity: 0, scale: 0.5 }}
				/>
			))}
		</div>
	)
}

export default Skeleton

import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import styles from './SkeletonList.module.scss'

const SkeletonList = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 1, scale: 1 }}
				animate={{ opacity: 0, scale: 0.9 }}
				className={styles.wrapper}
			>
				{new Array(10).fill(null).map((item, index) => (
					<div className={styles.skeleton} key={index} />
				))}
			</motion.div>
		</AnimatePresence>
	)
}

export default SkeletonList

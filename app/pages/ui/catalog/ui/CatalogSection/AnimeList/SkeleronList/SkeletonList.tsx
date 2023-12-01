import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import styles from './SkeletonList.module.scss'

const SkeletonList = () => {
	return (
		<AnimatePresence>
			<motion.div className={styles.wrapper}>
				{new Array(10).fill(null).map((item, index) => (
					<div className={styles.skeleton} key={index} />
				))}
			</motion.div>
		</AnimatePresence>
	)
}

export default SkeletonList

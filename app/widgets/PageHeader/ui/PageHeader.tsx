import React from 'react'

import classNames from 'classnames'

import styles from './PageHeader.module.scss'

interface PageHeader {
	title: string
	className?: string
}

const PageHeader = (props: PageHeader) => {
	const { title, className } = props

	return <h1 className={classNames(styles.header, className)}>{title}</h1>
}

export default PageHeader

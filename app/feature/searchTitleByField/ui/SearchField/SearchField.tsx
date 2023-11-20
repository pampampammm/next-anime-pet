'use client'

import React from 'react'

import { useSearch } from '../../model/service/useSearch/useSearch'

import SearchAnimeList from '@/app/feature/searchTitleByField/ui/SearchAnimeList/SearchAnimeList'

import Input from '@/app/shared/ui/Input/Input'

import classNames from 'classnames'
import styles from './SearchField.module.scss'

interface FieldProps {
	className?: string
}

const SearchField = ({ className }: FieldProps) => {
	const { queryData, handleSetInput } = useSearch()
	const { data, isLoading, isError, isSuccess } = queryData

	const inputMods: Record<string, boolean> = {
		[styles.inputLoading]: isLoading,
		[styles.error]: isError,
	}

	return (
		<div className={classNames(styles.wrapper, [className])}>
			<Input
				placeholder={'Search...'}
				className={classNames(styles.input, inputMods)}
				onChange={handleSetInput}
			/>
			{isSuccess && (
				<SearchAnimeList className={styles.list} items={data} />
			)}
		</div>
	)
}

export default SearchField

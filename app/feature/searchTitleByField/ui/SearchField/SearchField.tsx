'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'

import { useSearch } from '../../model/service/useSearch/useSearch'

import SearchAnimeList from '@/app/feature/searchTitleByField/ui/SearchAnimeList/SearchAnimeList'

import Input from '@/app/shared/ui/Input/Input'

import classNames from 'classnames'
import styles from './SearchField.module.scss'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'

interface FieldProps {
	className?: string
}

const SearchField = ({ className }: FieldProps) => {
	const [isFocused, setFocused] = useState<boolean>(false)
	const { queryData, handleSetInput } = useSearch(isFocused)

	const { data, isLoading, isError, isSuccess } = queryData

	const inputMods: Record<string, boolean> = {
		[styles.inputLoading]: isLoading,
		[styles.error]: isError,
	}

	return (
		<div className={classNames(styles.wrapper, [className])}>
			<div className={styles.inputBlock}>
				<MaterialIcon name={'MdSearch'} />
				<Input
					placeholder={'Search...'}
					className={classNames(styles.input, inputMods)}
					onChange={handleSetInput}
					onFocus={() => setFocused(true)}
					onBlur={() => {
						setFocused(false)
						console.log('asffassadfgdasgsgdgwsddfhbs')
					}}
				/>
			</div>

			{isSuccess && isFocused && (
				<SearchAnimeList
					className={styles.list}
					items={data}
					isLoading={isLoading}
				/>
			)}
		</div>
	)
}

export default SearchField

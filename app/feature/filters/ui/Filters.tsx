'use client'

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { orderListItems, sortsListItems } from '../lib/helpers/helpers'
import { filterActions } from '../model/slice/filterSlice'
import { getFilterSort } from '../model/selectors/getFilter'

import { Dropdown, ListItem } from '@/app/shared/ui/Dropdown'
import { SORT_TYPE } from '@/app/shared/const/constants'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'

import { DynamicStoreReducerWrapper } from '@/app/shared/components/DynamicStoreReducerWrapper'
import { userReducer } from '@/app/entity/User/model/slice/userSlice'

import styles from './Filters.module.scss'

const Filters = () => {
	const dispatch = useAppDispatch()

	const handleSetSort = (item: ListItem<SORT_TYPE>) => {
		dispatch(filterActions.setSortType(item.value))
	}

	const handleSetSortBy = (item: ListItem<'-' | '+'>) => {
		// dispatch(filterActions.setSortBy(item.value))
	}

	return (
		<DynamicStoreReducerWrapper reducerKey={'filter'} reducer={userReducer}>
			<div className={styles.wrapper}>
				<h3>Filters</h3>
				<div className={styles.content}>
					<div className={styles.dropdownGroup}>
						<div className={styles.dropdown}>
							<label>Genres : </label>
							<Dropdown items={sortsListItems} />
						</div>
						<div className={styles.dropdown}>
							{/*<label>Status: </label>*/}
							{/*<Dropdown*/}
							{/*	items={[*/}
							{/*		{ label: '324', id: '23213' },*/}
							{/*		{ label: '463', id: '242213' },*/}
							{/*		{ label: '2534', id: '723' },*/}
							{/*		{ label: '2434', id: '423' },*/}
							{/*		{ label: '2324', id: '253' },*/}
							{/*		{ label: '2134', id: '233' },*/}
							{/*	]}*/}
							{/*/>*/}
						</div>
					</div>
					<div className={styles.sortingGroup}>
						<div className={styles.sorting}>
							<label>Sorting by: </label>
							<Dropdown
								onChange={handleSetSort}
								icon={'MdStairs'}
								items={sortsListItems}
							/>
							<label>Order by: </label>
							<Dropdown
								onChange={handleSetSortBy}
								icon={'MdList'}
								items={orderListItems}
							/>
						</div>
					</div>
				</div>
			</div>
		</DynamicStoreReducerWrapper>
	)
}

export default Filters

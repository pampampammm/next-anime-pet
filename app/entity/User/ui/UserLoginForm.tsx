'use client'

import React, { useEffect } from 'react'

import { Button } from '@/app/shared/ui/Button/Button'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import {
	getUserById,
	loginByEmail,
} from '@/app/entity/User/model/services/loginByEmail'
import { useSelector } from 'react-redux'
import { getUser } from '@/app/entity/User/model/selectors/getUser'
import { DynamicStoreReducerWrapper } from '@/app/shared/components/DynamicStoreReducerWrapper'
import { userReducers } from '@/app/entity/User/model/slice/userSlice'

const UserLoginForm = () => {
	const dispatch = useAppDispatch()
	const user = useSelector(getUser)

	useEffect(() => {}, [user, dispatch])

	const isAuth = user !== null

	return (
		<DynamicStoreReducerWrapper reducerKey={'user'} reducer={userReducers}>
			<div>
				{isAuth && (
					<Button
						onClick={() => {
							dispatch(
								loginByEmail({
									email: 'levashov1927@gmail.com',
									password: 'mattvoy2002',
									grant_type: 'password',
								})
							)

							dispatch(getUserById({ id: '1444181' }))
						}}
					>
						Login
					</Button>
				)}
			</div>
		</DynamicStoreReducerWrapper>
	)
}

export default UserLoginForm

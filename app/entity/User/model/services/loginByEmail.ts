import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	AuthPostParams,
	AuthResponse,
	UserEntityResponse,
} from '@/app/entity/User/model/types/types'

import { axiosAPI } from '@/app/shared/api/api'
import { saveTokensStorage } from '@/app/shared/cookie/saveToStorage'
import { errorCatch } from '@/app/shared/api/helper'
import Cookies from 'js-cookie'

const UserService = {
	async getUser(id: string, token: string) {
		return await axiosAPI.get<UserEntityResponse>(
			`https://kitsu.io/api/edge/users/${id}?`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			}
		)
	},
}

export const getUserById = createAsyncThunk<UserEntityResponse, { id: string }>(
	'user login',
	async ({ id }, thunkApi) => {
		try {
			const token = Cookies.get('accessToken')

			const tokenss = token
				? token
				: 'imUmu-RvHUylA4p7jWjGw5JOKLRuvOnEJzD8i539h3s'

			const response = await UserService.getUser('1444181', tokenss)

			console.log(response.data)

			return response.data
		} catch (e) {
			const error = errorCatch(e)

			return thunkApi.rejectWithValue(error)
		}
	}
)

const AuthService = {
	async login(username: string, password: string) {
		const response = await axiosAPI.post<AuthResponse>(
			'https://kitsu.io/api/oauth/token',
			{ username, password, grant_type: 'password' },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		console.log(response.data.access_token)

		if (response.data.access_token) {
			saveTokensStorage(response.data)
		}

		return response
	},
	// logout() {
	// 	removeTokensStorage()
	// 	localStorage.removeItem('user')
	// },
	// async getNewToken() {
	// 	const refreshToken = Cookies.get('refreshToken')
	//
	// 	const response = await axiosAPI.post<AuthResponse>(
	// 		`https://kitsu.io/api/oauth/token`,
	// 		{ refreshToken },
	// 		{ headers: getContentType() }
	// 	)
	//
	// 	if (response.data.accessToken) {
	// 		saveToStorage(response.data)
	// 	}
	//
	// 	return response
	// },
}

export const loginByEmail = createAsyncThunk<AuthResponse, AuthPostParams>(
	'user login',
	async ({ password, email }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)

			// @ts-ignore
			if (response.data.accessToken) {
				saveTokensStorage(response.data)
			}

			return response.data
		} catch (e) {
			const error = errorCatch(e)

			return thunkApi.rejectWithValue(error)
		}
	}
)

// export const checkAuth = createAsyncThunk<AuthResponse, AuthPostParams>(
// 	'user login',
// 	async (_, thunkApi) => {
// 		try {
// 			const response = await AuthService.getNewToken()
// 			console.log('success')
//
// 			return response.data
// 		} catch (e) {
// 			const error = errorCatch(e)
//
// 			console.log(error)
//
// 			return thunkApi.rejectWithValue(e)
// 		}
// 	}
// )

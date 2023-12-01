import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '@/app/entity/User/model/types/types'
import { loginByEmail } from '@/app/entity/User/model/services/loginByEmail'

export const getUserLCData = () => {
	const user = localStorage.getItem('USER_LOCALSTORAGE_KEY')
	if (user) {
		return JSON.parse(user)
	}

	return null
}
const initialState: UserSchema = {
	user: null,
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginByEmail.pending, (state) => {
				state.isLoading = true
			})
			.addCase(loginByEmail.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(loginByEmail.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = {
					username: payload.username,
					id: payload.username,
					email: payload.username,
					createdAt: payload.username,
				}
			})
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

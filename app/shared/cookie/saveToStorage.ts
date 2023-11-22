import { AuthResponse, ITokens } from '../../entity/User/model/types/types'
import Cookies from 'js-cookie'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.access_token)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const saveToStorage = (data: AuthResponse) => {
	localStorage.setItem('user', JSON.stringify(data))
}

import axios from 'axios'

export const API_URL = 'https://kitsu.io/api/edge/anime'

export const axiosAPI = axios.create({
	baseURL: API_URL,
})

axiosAPI.interceptors.request.use((config) => {
	const token = localStorage.getItem('accessToken')

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

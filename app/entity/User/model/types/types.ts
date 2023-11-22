export interface UserEntity {
	id: string
	username: string
	email: string
	createdAt: string
}

export interface UserEntityResponse {
	id: string
	attributes: UserAttributes
}

interface UserAttributes {
	name: string
	birthday: string
}

export interface ITokens {
	access_token: string
	refreshToken: string
}

export interface AuthPostParams {
	grant_type: 'password' | 'refresh_token'
	email: string
	password: string
}

export interface AuthResponse extends ITokens {
	username: string
}

export interface UserSchema {
	user: UserEntity | null
	isLoading: boolean
}

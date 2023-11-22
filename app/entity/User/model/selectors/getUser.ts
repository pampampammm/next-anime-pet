import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getUser = (state: StateSchema) => state.user.user
export const getUserLoading = (state: StateSchema) => state.user.isLoading

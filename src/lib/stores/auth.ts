import { createJSONStorage, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { UserInfo } from '@/lib/services/api/user-services/authentication/login/types'

export const authSessionKey = 'YXV0aF9zZXNzaW9u'

export type AuthStoreState = {
  token?: string
  refresh_token?: string
  userDetail: UserInfo
}

const INITIAL_AUTH_STORE_VALUE: AuthStoreState = {
  token: undefined,
  refresh_token: undefined,
  userDetail: {
    user_uuid: '',
    fullname: '',
    email: '',
    phone: '',
  },
}

type AuthStoreActions = {
  setToken: (token: string) => void
  setRefreshToken: (refreshToken: string) => void
  setUserDetail: (userDetail: UserInfo) => void
  clearAuth: () => void
}

type AuthStore = AuthStoreState & AuthStoreActions

export const useAuth = createWithEqualityFn(
  persist<AuthStore>(
    (set) => ({
      ...INITIAL_AUTH_STORE_VALUE,
      setToken: (token) => set({ token }),
      setRefreshToken: (refresh_token) => set({ refresh_token }),
      setUserDetail: (userDetail) => set({ userDetail }),
      clearAuth: () => set(INITIAL_AUTH_STORE_VALUE),
    }),
    {
      name: authSessionKey,
      storage: createJSONStorage(() => localStorage),
    }
  ),
  shallow
)

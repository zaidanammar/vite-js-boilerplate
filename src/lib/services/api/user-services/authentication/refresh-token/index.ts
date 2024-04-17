import { API_ROOT_PATH } from '@/lib/constants/api'
import { postAPI } from '@/lib/services/api/fetcher'

import {
  SubmitRefreshTokenRequest,
  SubmitRefreshTokenResponseData,
} from './types'

export const submitRefreshToken = (request: SubmitRefreshTokenRequest) =>
  postAPI<SubmitRefreshTokenResponseData, SubmitRefreshTokenRequest>({
    path: '/internal/auth/refresh-token',
    rootPath: API_ROOT_PATH.USER_SERVICE,
    requestBody: request,
  })

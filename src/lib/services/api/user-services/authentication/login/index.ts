import { API_ROOT_PATH } from '@/lib/constants/api'
import { MutationOptions } from '@/lib/models/api/baseResponse'
import { usePostAPI } from '@/lib/services/api/hooks'

import { SubmitLoginRequest, SubmitLoginResponseData } from './types'

export const useSubmitLogin = (
  options?: MutationOptions<SubmitLoginResponseData, SubmitLoginRequest>
) =>
  usePostAPI<SubmitLoginResponseData, SubmitLoginRequest>({
    path: '/internal/auth/login',
    rootPath: API_ROOT_PATH.USER_SERVICE,
    options,
  })

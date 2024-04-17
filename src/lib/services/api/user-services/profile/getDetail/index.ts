import { API_ROOT_PATH } from '@/lib/constants/api'
import { QueryOptions } from '@/lib/models/api/baseResponse'
import { useGetAPI } from '@/lib/services/api/hooks'

import { GetProfileDetailResponseData } from './types'

const getProfileQueryKey = 'getProfileDetail'

export const useGetProfileDetail = (
  options?: QueryOptions<GetProfileDetailResponseData>
) =>
  useGetAPI<GetProfileDetailResponseData>({
    queryKey: getProfileQueryKey,
    path: '/internal/profile/get-detail',
    rootPath: API_ROOT_PATH.USER_SERVICE,
    options,
  })

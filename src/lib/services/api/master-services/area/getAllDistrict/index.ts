import { usePostAPI } from '@/lib/services/api/hooks'

import { GetAllDistrictResponseData, DistrictRequest } from './types'

export const useGetAllDistrict = () =>
  usePostAPI<GetAllDistrictResponseData, DistrictRequest>({
    path: '/master/area/district',
  })

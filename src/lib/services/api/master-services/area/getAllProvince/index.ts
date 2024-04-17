import { useRequestGetAPI } from '@/lib/services/api/hooks'

import { GetAllProvinceResponseData, ProvinceRequest } from './types'

const getAllProvinceQueryKey = 'getAllProvince'

export const useGetAllProvince = () =>
  useRequestGetAPI<GetAllProvinceResponseData, ProvinceRequest>({
    queryKey: getAllProvinceQueryKey,
    path: '/master/area/province',
  })

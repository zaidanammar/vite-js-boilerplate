import { usePostAPI } from '@/lib/services/api/hooks'

import { GetAllCityResponseData, CityRequest } from './types'

export const useGetAllCity = () =>
  usePostAPI<GetAllCityResponseData, CityRequest>({
    path: '/master/area/city',
  })

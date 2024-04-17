import { usePostAPI } from '@/lib/services/api/hooks'

import { GetAllSubDistrictResponseData, SubDistrictRequest } from './types'

export const useGetAllSubDistrict = () =>
  usePostAPI<GetAllSubDistrictResponseData, SubDistrictRequest>({
    path: '/master/area/subdistrict',
  })

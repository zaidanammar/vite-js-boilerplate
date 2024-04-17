import { useGetAPI } from '@/lib/services/api/hooks'

import { GetAllBankResponseData } from './types'

const getAllBankQueryKey = 'getAllBank'

export const useGetAllBank = () =>
  useGetAPI<GetAllBankResponseData>({
    queryKey: getAllBankQueryKey,
    path: '/master/bank',
  })

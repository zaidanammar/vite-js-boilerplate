import { API_ROOT_PATH } from '@/lib/constants/api'
import { useRequestGetAPI } from '@/lib/services/api/hooks'

import {
  GetDeliveryTransactionListQueryParams,
  GetDeliveryTransactionListResponseData,
  UseGetDeliveryTransactionListParams,
} from './types'

export const GetDeliveryTransactionListQueryKey = 'GetDeliveryTransactionList'

export const useGetDeliveryTransactionList = ({
  queryParams,
  options,
}: UseGetDeliveryTransactionListParams) =>
  useRequestGetAPI<
    GetDeliveryTransactionListResponseData,
    GetDeliveryTransactionListQueryParams
  >({
    queryKey: GetDeliveryTransactionListQueryKey,
    path: '/v2/internal/transaction/delivery/get-list',
    rootPath: API_ROOT_PATH.ORDER_SERVICE,
    options,
    config: {
      data: queryParams,
    },
  })

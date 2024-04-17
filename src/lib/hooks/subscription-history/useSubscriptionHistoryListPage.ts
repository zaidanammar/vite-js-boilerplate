import { message } from 'antd'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { subscriptionHistoryPath } from '@/lib/constants/routes'
import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'
import { useTablePagination } from '@/lib/hooks/shared/useTablePagination'
import { useGetSubscriptionHistoryList } from '@/lib/services/api/subscription-services/subscription-history/getList'
import { GetSubscriptionHistoryListQueryParams } from '@/lib/services/api/subscription-services/subscription-history/getList/types'
import { cleanedArray } from '@/lib/utils/array/cleanedArray'
import { defaultSubscriptionHistoryColumnOptions } from '@/lib/views/app-views/subscription-history/app-views/list/constants'

const useSubscriptionHistoryListPage = () => {
  const navigate = useNavigate()

  const tableMeta = useTablePagination()
  const { getSearchParamsValue } = useQueryParams()

  const [selectedColumns, setSelectedColumns] = useState(
    defaultSubscriptionHistoryColumnOptions
  )

  const queryParams = useMemo<GetSubscriptionHistoryListQueryParams>(() => {
    const filter: GetSubscriptionHistoryListQueryParams['search'] = [
      {
        field: 'restaurant_name',
        value: getSearchParamsValue('restaurant_name') || '',
      },
      {
        field: 'subscription_name',
        value: getSearchParamsValue('subscription_name') || '',
      },
      {
        field: 'created_at',
        value: getSearchParamsValue('created_at') || '',
      },
      {
        field: 'start_date',
        value: getSearchParamsValue('start_date') || '',
      },
      {
        field: 'end_date',
        value: getSearchParamsValue('end_date') || '',
      },
      {
        field: 'subscription_amount',
        value: getSearchParamsValue('subscription_amount') || '',
      },
      {
        field: 'status',
        value: getSearchParamsValue('status') || '',
      },
    ]
    return {
      search: cleanedArray(filter),
      limit: tableMeta.limit,
      page: tableMeta.page,
    }
  }, [getSearchParamsValue, tableMeta])

  const {
    data,
    isPending: isLoadingSubscriptionHistoryListData,
    refetch: refreshSubscriptionHistoryListData,
  } = useGetSubscriptionHistoryList({
    queryParams,
  })

  const subscriptionHistoryListData = useMemo(
    () =>
      (data?.objs ?? []).map((item, index) => ({
        ...item,
        index: index + tableMeta.offset + 1,
      })),
    [data, tableMeta.offset]
  )

  const totalData = data?.total_objs ?? 0

  const handleClearFilter = () => navigate(subscriptionHistoryPath)

  const handleRefreshData = () =>
    refreshSubscriptionHistoryListData().then(({ isSuccess }) => {
      if (isSuccess) {
        message.success('Data has been refreshed')
      }
    })

  return {
    tableMeta,
    totalData,
    handleClearFilter,
    handleRefreshData,
    selectedColumns,
    setSelectedColumns,
    subscriptionHistoryListData,
    refreshSubscriptionHistoryListData,
    isLoadingSubscriptionHistoryListData,
    defaultSubscriptionHistoryColumnOptions,
  }
}

export default useSubscriptionHistoryListPage

export type SubscriptionHistoryListViewModel = ReturnType<
  typeof useSubscriptionHistoryListPage
>

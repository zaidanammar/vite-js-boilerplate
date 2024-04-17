import { message } from 'antd'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { deliveryTransactionPath } from '@/lib/constants/routes'
import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'
import { useTablePagination } from '@/lib/hooks/shared/useTablePagination'
import { useGetDeliveryTransactionList } from '@/lib/services/api/transaction-services/delivery-transaction/getList'
import { GetDeliveryTransactionListQueryParams } from '@/lib/services/api/transaction-services/delivery-transaction/getList/types'
import { cleanedArray } from '@/lib/utils/array/cleanedArray'
import { DefaultDeliveryTransactionColumns } from '@/lib/views/app-views/delivery-transaction/app-views/list/components/deliveryTransactionTableColumns'

const useDeliveryTransactionListPage = () => {
  const navigate = useNavigate()

  const tableMeta = useTablePagination()
  const { getSearchParamsValue } = useQueryParams()

  const defaultDeliveryTransactionColumnOptions =
    DefaultDeliveryTransactionColumns().map((item) => ({
      label: item.title,
      value: item.key,
    }))

  const [selectedColumns, setSelectedColumns] = useState(
    defaultDeliveryTransactionColumnOptions
  )

  const queryParams = useMemo<GetDeliveryTransactionListQueryParams>(() => {
    const filter: GetDeliveryTransactionListQueryParams['search'] = [
      {
        field: 'booking_code',
        value: getSearchParamsValue('booking_code') || '',
      },
      {
        field: 'transaction_created_at',
        value: getSearchParamsValue('transaction_created_at') || '',
      },
      {
        field: 'order_created_at',
        value: getSearchParamsValue('order_created_at') || '',
      },
      {
        field: 'courier_phone_number',
        value: getSearchParamsValue('courier_phone_number') || '',
      },
      {
        field: 'customer_name',
        value: getSearchParamsValue('customer_name') || '',
      },
      {
        field: 'customer_phone_number',
        value: getSearchParamsValue('customer_phone_number') || '',
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
    isPending: isLoadingDeliveryTransactionListData,
    refetch: refreshDeliveryTransactionListData,
  } = useGetDeliveryTransactionList({
    queryParams,
  })

  const deliveryTransactionListData = useMemo(
    () =>
      (data?.objs ?? []).map((item, index) => ({
        ...item,
        index: index + tableMeta.offset + 1,
      })),
    [data, tableMeta.offset]
  )

  const totalData = data?.total_objs ?? 0

  const handleClearFilter = () => navigate(deliveryTransactionPath)

  const handleRefreshData = () =>
    refreshDeliveryTransactionListData().then(({ isSuccess }) => {
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
    deliveryTransactionListData,
    refreshDeliveryTransactionListData,
    isLoadingDeliveryTransactionListData,
    defaultDeliveryTransactionColumnOptions,
  }
}

export default useDeliveryTransactionListPage

export type DeliveryTransactionListViewModel = ReturnType<
  typeof useDeliveryTransactionListPage
>

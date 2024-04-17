import { message } from 'antd'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { outletPath } from '@/lib/constants/routes'
import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'
import { useTablePagination } from '@/lib/hooks/shared/useTablePagination'
import { useGetOutletList } from '@/lib/services/api/outlet-services/getList'
import { GetOutletListQueryParams } from '@/lib/services/api/outlet-services/getList/types'
import { cleanedArray } from '@/lib/utils/array/cleanedArray'
import { defaultOutletColumnOptions } from '@/lib/views/app-views/outlet/app-views/list/constants'

const useOutletListPage = () => {
  const navigate = useNavigate()

  const tableMeta = useTablePagination()
  const { getSearchParamsValue } = useQueryParams()

  const [selectedColumns, setSelectedColumns] = useState(
    defaultOutletColumnOptions
  )

  const queryParams = useMemo<GetOutletListQueryParams>(() => {
    const filter: GetOutletListQueryParams['search'] = [
      {
        field: 'keyword',
        value: getSearchParamsValue('restaurant_name') || '',
      },
      {
        field: 'keyword',
        value: getSearchParamsValue('restaurant_outlet_name') || '',
      },
      {
        field: 'status',
        value: getSearchParamsValue('status') || '',
      },
      {
        field: 'pinpoint',
        value: getSearchParamsValue('pinpoint') || '',
      },
      {
        field: 'free_delivery',
        value: getSearchParamsValue('free_delivery') || '',
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
    isPending: isLoadingOutletListData,
    refetch: refreshOutletListData,
  } = useGetOutletList({
    queryParams,
  })

  const OutletListData = useMemo(
    () =>
      (data?.objs ?? []).map((item, index) => ({
        ...item,
        index: index + tableMeta.offset + 1,
      })),
    [data, tableMeta.offset]
  )

  const totalData = data?.total_objs ?? 0

  const handleClearFilter = () => navigate(outletPath)

  const handleRefreshData = () =>
    refreshOutletListData().then(({ isSuccess }) => {
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
    OutletListData,
    refreshOutletListData,
    isLoadingOutletListData,
    defaultOutletColumnOptions,
  }
}

export default useOutletListPage

export type OutletListViewModel = ReturnType<typeof useOutletListPage>

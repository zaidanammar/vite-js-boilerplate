import { useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { foodCategoryPath } from '@/lib/constants/routes'
import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'
import { useTablePagination } from '@/lib/hooks/shared/useTablePagination'
import { useDeleteFoodCategory } from '@/lib/services/api/food-category-services/delete'
import {
  GetFoodCategoryListQueryKey,
  useGetFoodCategoryList,
} from '@/lib/services/api/food-category-services/getList'
import { GetFoodCategoryListQueryParams } from '@/lib/services/api/food-category-services/getList/types'
import { cleanedArray } from '@/lib/utils/array/cleanedArray'
import { defaultFoodCategoryColumnOptions } from '@/lib/views/app-views/food-category/app-views/list/constants'

const useFoodCategoryListPage = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const tableMeta = useTablePagination()
  const { getSearchParamsValue } = useQueryParams()

  const [selectedColumns, setSelectedColumns] = useState(
    defaultFoodCategoryColumnOptions
  )

  const queryParams = useMemo<GetFoodCategoryListQueryParams>(() => {
    const filter: GetFoodCategoryListQueryParams['search'] = [
      {
        field: 'keyword',
        value: getSearchParamsValue('name') || '',
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
    isPending: isLoadingFoodCategoryListData,
    refetch: refreshFoodCategoryListData,
  } = useGetFoodCategoryList({
    queryParams,
  })

  const { mutate: deleteFoodCategory, isPending: isLoadingDeleteFoodCategory } =
    useDeleteFoodCategory({
      onSuccess: () => {
        message.success('Food category has been deleted successfully')
        queryClient.invalidateQueries({
          queryKey: [GetFoodCategoryListQueryKey],
        })
      },
    })

  const foodCategoryListDataListData = useMemo(
    () =>
      (data?.objs ?? []).map((item, index) => ({
        ...item,
        index: index + tableMeta.offset + 1,
      })),
    [data, tableMeta.offset]
  )

  const totalData = data?.total_objs ?? 0

  const handleClearFilter = () => navigate(foodCategoryPath)

  const handleRefreshData = () =>
    refreshFoodCategoryListData().then(({ isSuccess }) => {
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
    deleteFoodCategory,
    isLoadingDeleteFoodCategory,
    foodCategoryListDataListData,
    refreshFoodCategoryListData,
    isLoadingFoodCategoryListData,
    defaultFoodCategoryColumnOptions,
  }
}

export default useFoodCategoryListPage

export type FoodCategoryListViewModel = ReturnType<
  typeof useFoodCategoryListPage
>

import { useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

import { GetFoodCategoryListQueryKey } from '@/lib/services/api/food-category-services/getList'
import { useUpdateStatusFoodCategory } from '@/lib/services/api/food-category-services/updateStatus'

const useSubmitUpdateStatusFoodCategory = () => {
  const queryClient = useQueryClient()

  const {
    mutate: submitUpdateFoodCategoryStatus,
    isPending: isSubmittingUpdateFoodCategoryStatus,
  } = useUpdateStatusFoodCategory({
    onSuccess: () => {
      message.success('Food category status has been updated successfully')
      queryClient.invalidateQueries({
        queryKey: [GetFoodCategoryListQueryKey],
      })
    },
  })

  return {
    submitUpdateFoodCategoryStatus,
    isSubmittingUpdateFoodCategoryStatus,
  }
}

export default useSubmitUpdateStatusFoodCategory

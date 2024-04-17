import { useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

import { GetOutletListQueryKey } from '@/lib/services/api/outlet-services/getList'
import { useUpdateStatusOutlet } from '@/lib/services/api/outlet-services/updateStatus'

const useSubmitUpdateStatusOutlet = () => {
  const queryClient = useQueryClient()

  const {
    mutate: submitUpdateOutletStatus,
    isPending: isSubmittingUpdateOutletStatus,
  } = useUpdateStatusOutlet({
    onSuccess: () => {
      message.success('Outlet status has been updated successfully')
      queryClient.invalidateQueries({
        queryKey: [GetOutletListQueryKey],
      })
    },
  })

  return { submitUpdateOutletStatus, isSubmittingUpdateOutletStatus }
}

export default useSubmitUpdateStatusOutlet

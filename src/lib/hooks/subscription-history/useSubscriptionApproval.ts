import { useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

import { useSubmitSubscriptionApproval } from '@/lib/services/api/subscription-services/subscription-history/approval'
import { SubscriptionApprovalRequest } from '@/lib/services/api/subscription-services/subscription-history/approval/types'
import { GetSubscriptionHistoryListQueryKey } from '@/lib/services/api/subscription-services/subscription-history/getList'

const useSubscriptionApproval = () => {
  const queryClient = useQueryClient()

  const {
    mutate: submitSubscriptionApproval,
    isPending: isSubmittingSubscriptionApproval,
  } = useSubmitSubscriptionApproval({
    onSuccess: () => {
      message.success('Subscription approval has been submitted successfully')
      queryClient.invalidateQueries({
        queryKey: [GetSubscriptionHistoryListQueryKey],
      })
    },
  })

  const handleSubmitApproval = (
    action: SubscriptionApprovalRequest['action'],
    subscriptionUUID: string
  ) => {
    submitSubscriptionApproval({
      action,
      subscription_history_uuid: subscriptionUUID,
    })
  }

  return { handleSubmitApproval, isSubmittingSubscriptionApproval }
}

export default useSubscriptionApproval

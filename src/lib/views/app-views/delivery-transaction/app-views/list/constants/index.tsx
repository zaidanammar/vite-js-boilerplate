import { PresetColorType, PresetStatusColorType } from 'antd/es/_util/colors'
import { LiteralUnion } from 'antd/es/_util/type'

import { TransactionStatus } from '@/lib/services/api/transaction-services/delivery-transaction/getList/types'

export const transactionStatusColorMap: Record<
  TransactionStatus,
  LiteralUnion<PresetColorType | PresetStatusColorType>
> = {
  PAID: 'success',
  PENDING: 'warning',
  CANCELLED: 'error',
  EXPIRED: 'error',
  REFUND: 'error',
  VOID: 'error',
  WAITING_FOOD: 'warning',
  WAITING_FOR_REFUND: 'warning',
  WAITING_ORDER: 'warning',
  WAITING_PAYMENT: 'warning',
}

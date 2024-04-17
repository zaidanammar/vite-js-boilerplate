import { QueryParamsRequest } from '@/lib/models/api/baseRequest'
import { APIListResponseData } from '@/lib/models/api/baseResponse'
import { QueryOptions } from '@/lib/models/api/baseResponse'

export type UseGetDeliveryTransactionListParams = {
  queryParams?: GetDeliveryTransactionListQueryParams
  options?: QueryOptions<GetDeliveryTransactionListResponseData>
}

export type GetDeliveryTransactionListFilterType =
  | 'booking_code'
  | 'transaction_created_at'
  | 'order_created_at'
  | 'courier_phone_number'
  | 'customer_name'
  | 'customer_phone_number'

export type GetDeliveryTransactionListQueryParams =
  QueryParamsRequest<GetDeliveryTransactionListFilterType>

export enum TransactionStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
  REFUND = 'REFUND',
  VOID = 'VOID',
  WAITING_FOR_REFUND = 'WAITING_FOR_REFUND',
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  WAITING_ORDER = 'WAITING_ORDER',
  WAITING_FOOD = 'WAITING_FOOD',
}

export type DeliveryTransactionEntry = {
  uuid: string
  outlet: Outlet
  transaction: Transaction
  payment: Payment
  origin: Origin
  destination: Destination
  courier: Courier
}

type Outlet = {
  restaurant_outlet_uuid: string
  restaurant_outlet_name: string
  outlet_phone: string
  restaurant_uuid: string
  restaurant_name: string
}

type Transaction = {
  uuid: string
  code: string
  booking_code: string
  category: string
  created_at: string
  note: string
  status: TransactionStatus
  status_delivery: string
  status_delivery_text: string
}

type Payment = {
  channel_category: string
  channel_name: string
  transaction_amount: number
  delivery_fee: number
  delivery_discount: number
  final_amount: number
}

type Origin = {
  contact_name: string
  contact_phone: string
  address: string
}

type Destination = {
  contact_name: string
  contact_phone: string
  address: string
}

type Courier = {
  uuid: string
  name: string
  order_at: string
  driver: Driver
}

type Driver = {
  photo_url: string
  name: string
  phone: string
}

export type GetDeliveryTransactionListResponseData =
  APIListResponseData<DeliveryTransactionEntry>

import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type MetaType = {
  total: number
  limit: number
  offset: number
}

export type APIResponse<Data = unknown> = {
  code: number
  data: Data
  message: string
  more_info: string
}

export type APIListResponseData<EntryType = unknown> = {
  curr_page: number
  total_page: number
  total_objs: number
  per_page: number
  objs: Array<EntryType>
}

export type MutationOptions<ResDataType, ReqType> = UseMutationOptions<
  ResDataType,
  AxiosError,
  ReqType
>

export type QueryOptions<ResDataType> = Omit<
  UseQueryOptions<ResDataType, AxiosError, ResDataType>,
  'queryKey'
>

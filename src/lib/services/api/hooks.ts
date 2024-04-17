import { useQuery, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosRequestConfig } from 'axios'

import { MutationOptions, QueryOptions } from '@/lib/models/api/baseResponse'

import { PostAPIParams, getAPI, postAPI, putAPI } from './fetcher'

export type APIFetcherParams = {
  rootPath?: string
  path: string
  config?: AxiosRequestConfig
}

/**
 * automatic / immediate GET without trigger
 */
type UseGetAPIParams<ResDataType> = APIFetcherParams & {
  queryKey: string
  options?: QueryOptions<ResDataType>
}

export const useGetAPI = <ResDataType>({
  path,
  config,
  rootPath,
  queryKey,
  options,
}: UseGetAPIParams<ResDataType>) => {
  return useQuery<ResDataType, AxiosError, ResDataType>({
    queryKey: [queryKey, config?.params] || [],
    queryFn: () =>
      getAPI<ResDataType>({
        rootPath,
        path,
        config,
      }),
    refetchOnWindowFocus: false,
    ...options,
  })
}
/**
 * GET using trigger
 */
type UseMutationGetAPIParams<
  ResDataType = unknown,
  ReqType = unknown,
> = APIFetcherParams & {
  options?: MutationOptions<ResDataType, ReqType>
}

export const useMutationGetAPI = <ResDataType, ReqType>({
  path,
  config,
  rootPath,
  options,
}: UseMutationGetAPIParams<ResDataType, ReqType>) => {
  return useMutation<ResDataType, AxiosError, ReqType>({
    mutationFn: () =>
      getAPI<ResDataType>({
        rootPath,
        path,
        config,
      }),
    ...options,
  })
}

/**
 * a hook to imitate useGetAPI where supposedly the endpoint use GET and request param
 * but the endpoint itself still use POST and request body while not modifying / upserting data
 */
export const useRequestGetAPI = <ResDataType = unknown, ReqType = unknown>({
  path,
  config,
  rootPath,
  queryKey,
  options,
}: UseGetAPIParams<ResDataType>) => {
  return useQuery<ResDataType, AxiosError, ResDataType>({
    queryKey: [queryKey, config?.params, config?.data] || [],
    queryFn: () =>
      postAPI<ResDataType, ReqType>({
        rootPath,
        path,
        config,
        requestBody: config?.data,
      }),
    ...options,
  })
}

/**
 * POST with trigger
 */
export type UsePostAPIParams<ResDataType, ReqType> =
  PostAPIParams<ResDataType> & {
    options?: MutationOptions<ResDataType, ReqType>
  }

export const usePostAPI = <ResDataType = unknown, ReqType = unknown>({
  rootPath,
  path,
  config,
  options,
}: UsePostAPIParams<ResDataType, ReqType>) => {
  return useMutation<ResDataType, AxiosError, ReqType>({
    mutationFn: (req) =>
      postAPI<ResDataType, ReqType>({
        rootPath,
        requestBody: req,
        path,
        config,
      }),
    ...options,
  })
}

/**
 * POST with path ID
 */
type DefaultReqType = { ID: string }
export type UsePostAPIWithPathIDParams<
  ResDataType,
  ReqType = DefaultReqType,
> = PostAPIParams<ResDataType> & {
  options?: MutationOptions<ResDataType, ReqType>
}

export const usePostAPIWithPathID = <
  ResDataType = unknown,
  ReqType extends DefaultReqType = DefaultReqType,
>({
  rootPath,
  path,
  config,
  options,
}: UsePostAPIParams<ResDataType, ReqType>) => {
  return useMutation<ResDataType, AxiosError, ReqType>({
    mutationFn: (req) => {
      const { ID, ...requestBody } = req
      return postAPI<ResDataType, Omit<ReqType, 'ID'>>({
        rootPath,
        requestBody: requestBody as Omit<ReqType, 'ID'>,
        path: `${path}/${ID}`,
        config,
      })
    },
    ...options,
  })
}

/**
 * PUT with trigger
 */
export type UsePutAPIParams<ResDataType, ReqType> =
  PostAPIParams<ResDataType> & {
    options?: MutationOptions<ResDataType, ReqType>
  }

export const usePutAPI = <ResDataType = unknown, ReqType = unknown>({
  rootPath,
  path,
  config,
  options,
}: UsePostAPIParams<ResDataType, ReqType>) => {
  return useMutation<ResDataType, AxiosError, ReqType>({
    mutationFn: (req) =>
      putAPI<ReqType>({
        rootPath,
        requestBody: req,
        path,
        config,
      }),
    ...options,
  })
}

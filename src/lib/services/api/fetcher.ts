import { AxiosRequestConfig } from 'axios'

import { APIResponse } from '@/lib/models/api/baseResponse'

import service from './fetcherConfig'

export type APIFetcherParams = {
  rootPath?: string
  path: string
  config?: AxiosRequestConfig
}

type GetAPIParams = APIFetcherParams

export const getAPIWithOriginResp = <ResType = unknown>({
  rootPath,
  path,
  config,
}: GetAPIParams) => service.get<ResType>(`${rootPath}${path}`, config)

export const getAPI = <ResDataType = unknown>({
  rootPath,
  path,
  config,
}: GetAPIParams) =>
  getAPIWithOriginResp<APIResponse<ResDataType>>({
    rootPath,
    path,
    config,
  }).then((res) => res.data.data)

export type PostAPIParams<ReqType> = APIFetcherParams & {
  requestBody?: ReqType
}

export const postAPIWithOriginResp = <ResType, ReqType = unknown>({
  rootPath,
  path,
  requestBody,
  config,
}: PostAPIParams<ReqType>) =>
  service.post<ResType>(`${rootPath}${path}`, requestBody, config)

export const postAPI = <ResDataType, ReqType = unknown>(
  params: PostAPIParams<ReqType>
) =>
  postAPIWithOriginResp<APIResponse<ResDataType>>(params).then(
    (res) => res.data.data
  )

type PatchAPIParams<ReqType> = PostAPIParams<ReqType>

export const patchAPI = <ReqType = unknown>({
  rootPath,
  path,
  requestBody,
  config,
}: PatchAPIParams<ReqType>) =>
  service
    .patch(`${rootPath}${path}`, requestBody, config)
    .then((res) => res.data.data)

type PutAPIParams<ReqType> = PostAPIParams<ReqType>

export const putAPI = <ReqType = unknown>({
  rootPath,
  path,
  requestBody,
  config,
}: PutAPIParams<ReqType>) =>
  service
    .put(`${rootPath}${path}`, requestBody, config)
    .then((res) => res.data.data)

/* eslint-disable sonarjs/cognitive-complexity */
import { CloseCircleFilled } from '@ant-design/icons'
import { message } from 'antd'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { API_BASE_URL } from '@/lib/constants/api'
import { dangerColor } from '@/lib/constants/colors'
import { APIResponse } from '@/lib/models/api/baseResponse'
import { AuthStoreState, authSessionKey, useAuth } from '@/lib/stores/auth'
import { customParamsSerializer } from '@/lib/utils/url/paramsSerializer'

import { submitRefreshToken } from './user-services/authentication/refresh-token'

const { clearAuth, setToken, token, refresh_token, userDetail } =
  useAuth.getState()

const unauthorizedCode = 401

const service = axios.create({
  baseURL: `${API_BASE_URL}`,
  timeout: 60000,
  paramsSerializer: customParamsSerializer,
})

const getDefaultHeaders = () => {
  const authState = (
    JSON.parse(localStorage.getItem(authSessionKey) ?? '') ?? {}
  )?.state as AuthStoreState

  if (!authState) {
    return { Token: undefined }
  }

  return {
    Token: authState.token,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onRequest = (config: any) => {
  const defaultHeaders = getDefaultHeaders()
  config.headers.Token = config.headers.Token ?? defaultHeaders.Token

  return config
}

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse) => response

// API respone interceptor
type PendingRequestCallback = (token: string) => void

let isTokenRefreshing = false
const pendingRequest: Array<PendingRequestCallback> = []

function onTokenRefreshed(token: string) {
  pendingRequest.filter((cb) => cb(token))
}

function addPendingRequest(callback: PendingRequestCallback) {
  pendingRequest.push(callback)
}

const onResponseError = async (error: AxiosError<APIResponse>) => {
  const { config, response } = error
  const originalRequest = config as AxiosRequestConfig<Response>
  const status = response?.status

  const notificationParam = {
    message: '',
    description: '',
  }

  const responseHeader = error.response?.data

  notificationParam.message = responseHeader?.message || 'Error'
  notificationParam.description =
    responseHeader?.more_info || 'Internal Server Error'

  if (status !== unauthorizedCode || isTokenRefreshing || !originalRequest) {
    message.open({
      content: (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <CloseCircleFilled style={{ color: dangerColor['main'] }} />
            <div>{notificationParam.message}</div>
          </div>
          <div>
            <div>{notificationParam.description}</div>
          </div>
        </>
      ),
    })

    return Promise.reject(error)
  }

  console.warn('Token expired: please wait we are trying to refresh token')

  const retryOriginalRequest = new Promise((resolve) => {
    addPendingRequest(async (token: string) => {
      if (originalRequest) {
        originalRequest.headers = {
          ...originalRequest?.headers,
          token,
        }
        resolve(service(originalRequest))
      }
    })
  })

  if (!isTokenRefreshing) {
    try {
      isTokenRefreshing = true

      if (!refresh_token) {
        clearAuth()
        throw error
      }

      const data = await submitRefreshToken({
        token: token || '',
        refresh_token: refresh_token || '',
        user_uuid: userDetail.user_uuid,
      })

      if (!data) {
        clearAuth()
        throw error
      }

      setToken(data.token)

      onTokenRefreshed(data.token)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return retryOriginalRequest
}

service.interceptors.request.use(onRequest, onRequestError)

service.interceptors.response.use(onResponse, onResponseError)

export default service

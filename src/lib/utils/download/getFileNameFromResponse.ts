import { AxiosResponse } from 'axios'

export const getFileNameFromResponse = (response?: AxiosResponse) => {
  const responseHeaders = new Headers(response?.headers as HeadersInit)
  const contentDisposition = responseHeaders.get('Content-Disposition')
  const match = contentDisposition?.match(/filename="([^"]+)"/)

  return match ? match[1] : 'unknown_filename'
}

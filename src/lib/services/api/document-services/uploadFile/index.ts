import { API_ROOT_PATH } from '@/lib/constants/api'
import { MutationOptions } from '@/lib/models/api/baseResponse'
import { postAPI } from '@/lib/services/api/fetcher'
import { usePostAPI } from '@/lib/services/api/hooks'

import {
  UploadFileParams,
  UploadFileRequest,
  UploadFileResponse,
} from './types'

export const useUploadFile = (
  options?: MutationOptions<UploadFileResponse, UploadFileRequest>
) =>
  usePostAPI<UploadFileResponse, UploadFileRequest>({
    path: `/v1/document/internal/public/upload`,
    rootPath: API_ROOT_PATH.DOCUMENT_SERVICE,
    options,
  })

export const uploadFile = async ({ requestBody }: UploadFileParams) =>
  postAPI<UploadFileResponse, UploadFileRequest | FormData>({
    path: `/v1/document/internal/public/upload`,
    rootPath: API_ROOT_PATH.DOCUMENT_SERVICE,
    requestBody,
    config: {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'multipart/form-data',
      },
    },
  })

export const onUploadFileDocument = async ({
  image_file,
  image_filename_prefix,
}: UploadFileRequest) => {
  const formData = new FormData()
  formData.append('image_file', image_file)
  formData.append('image_filename_prefix', image_filename_prefix)

  return await uploadFile({ requestBody: formData })
}

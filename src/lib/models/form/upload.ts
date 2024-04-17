import { UploadFile } from 'antd'

export type UploadInputValue = UploadFile & {
  originFileObj?: Blob
}

export type UploadInputValues = Array<UploadInputValue>

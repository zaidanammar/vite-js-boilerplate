export type UploadFileRequest = {
  image_file: Blob
  image_filename_prefix: string
}

export type UploadFileResponse = {
  image_filename: string
  url: string
}

export type UploadFileParams = {
  requestBody: UploadFileRequest | FormData
}

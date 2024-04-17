const chunkFailedMessage = /Loading chunk [\d]+ failed/
const dynamicImportFailedMessage = 'Failed to fetch dynamically imported module'

export const checkIsDynamicImportOrChunkLoadError = (error?: Error) => {
  const isErrorNameChunkLoadError = error?.name === 'ChunkLoadError'
  const isErrorMessageChunkLoadFailed =
    error?.message &&
    (chunkFailedMessage.test(error.message) ||
      error.message.includes(dynamicImportFailedMessage))

  return isErrorNameChunkLoadError || isErrorMessageChunkLoadFailed
}

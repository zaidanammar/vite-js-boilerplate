import { checkIsDynamicImportOrChunkLoadError } from '@/lib/components/ErrorBoundaryWrapper/utils'
import { isDevMode } from '@/lib/constants/env'

export const handleCatchBoundaryError = (
  error: Error,
  errorInfo: React.ErrorInfo
) => {
  if (isDevMode) {
    console.info('Error Info:', { error, errorInfo })
  }

  if (checkIsDynamicImportOrChunkLoadError(error)) {
    return
  }

  // your custom error handling here (logging, send to somewhere, etc)
  console.error({ error })
}

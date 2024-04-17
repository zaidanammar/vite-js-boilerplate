import { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'

const useQueryClientProvider = () => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry(failureCount, error) {
            const err = error as AxiosError
            if (err && Number(err.code) === 500) {
              return failureCount < 3
            }
            return false
          },
        },
      },
    })
  )

  return { queryClient }
}

export default useQueryClientProvider

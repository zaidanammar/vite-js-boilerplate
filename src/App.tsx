import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundaryWrapper from '@/lib/components/ErrorBoundaryWrapper'
import Layout from '@/lib/layout'
import Meta from '@/lib/layout/Meta'
import LayoutProviders from '@/lib/providers/LayoutProviders'
import Routings from '@/lib/router/Routings'
import { handleCatchBoundaryError } from '@/lib/utils/error'

import useQueryClientProvider from './lib/providers/QueryClientProvider'

const App = () => {
  const { queryClient } = useQueryClientProvider()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryWrapper}
      onError={handleCatchBoundaryError}
    >
      <Meta />
      <QueryClientProvider client={queryClient}>
        <LayoutProviders>
          <Router>
            <Layout>
              <Routings />
            </Layout>
          </Router>
        </LayoutProviders>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App

import React from 'react'
import { useLocation } from 'react-router-dom'

import { authRoutes } from '@/lib/constants/routes'

import CustomLayout from './components/CustomLayout'
import { useScrollToTop } from './hooks/useScrollToTop'

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation()

  const pure = authRoutes.includes(location.pathname)
  useScrollToTop()

  if (pure) {
    return children
  }

  return <CustomLayout>{children}</CustomLayout>
}

export default RootLayout

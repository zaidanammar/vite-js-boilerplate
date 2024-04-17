import React from 'react'

import { PageRoutes } from '@/lib/components/shared/Layout/MenuRouteWrapper/types'

const DeliveryTransactionListPage = React.lazy(() => import('./app-views/list'))

export const deliveryTransactionRoutes: PageRoutes = [
  {
    path: '/',
    element: <DeliveryTransactionListPage />,
  },
]

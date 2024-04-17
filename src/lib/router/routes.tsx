import React from 'react'
import type { PathRouteProps } from 'react-router-dom'

import {
  loginPath,
  subscriptionHistoryPath,
  outletPath,
  foodCategoryPath,
  deliveryTransactionPath,
} from '@/lib/constants/routes'

const Home = React.lazy(() => import('@/lib/views/app-views/home'))

const LoginPage = React.lazy(() => import('@/lib/views/auth-views/login'))

const SubscriptionHistoryPages = React.lazy(
  () => import('@/lib/views/app-views/subscription-history')
)

const FoodCategoryPages = React.lazy(
  () => import('@/lib/views/app-views/food-category')
)

const OutletPages = React.lazy(() => import('@/lib/views/app-views/outlet'))

const DeliveryTransactionPages = React.lazy(
  () => import('@/lib/views/app-views/delivery-transaction')
)

export const restrictedRoutes: Array<PathRouteProps> = [
  {
    path: loginPath,
    element: <LoginPage />,
  },
]

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: `${subscriptionHistoryPath}/*`,
    element: <SubscriptionHistoryPages />,
  },
  {
    path: `${outletPath}/*`,
    element: <OutletPages />,
  },
  {
    path: `${foodCategoryPath}/*`,
    element: <FoodCategoryPages />,
  },
  {
    path: `${deliveryTransactionPath}/*`,
    element: <DeliveryTransactionPages />,
  },
]

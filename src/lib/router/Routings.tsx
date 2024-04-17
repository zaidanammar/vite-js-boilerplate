/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { loginPath } from '@/lib/constants/routes'
import PageSkeleton from '@/lib/layout/components/PageSkeleton'
import RequireAuth from '@/lib/router/RequireAuth'
import RestrictedRoute from '@/lib/router/RestrictedRoute'
import Page404 from '@/lib/views/app-views/404'

import { privateRoutes, restrictedRoutes } from './routes'

const Routings = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        {restrictedRoutes.map(({ element, ...routeProps }) => (
          <Route
            {...routeProps}
            element={<RestrictedRoute>{element}</RestrictedRoute>}
            key={routeProps.path as string}
          />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <RequireAuth
                redirectTo={`${loginPath}?redirectTo=${location.pathname}`}
              >
                {element}
              </RequireAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  )
}

export default Routings

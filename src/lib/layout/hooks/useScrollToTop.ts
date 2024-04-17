import React from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  const { pathname, search } = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname, search])
}

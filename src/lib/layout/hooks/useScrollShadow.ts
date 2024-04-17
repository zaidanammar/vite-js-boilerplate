import { useEffect, useState } from 'react'

type UseScrollShadowProps = {
  height?: number
}

const useScrollShadow = (props?: UseScrollShadowProps) => {
  const { height = 100 } = props || {}
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= height && !shadow) {
        setShadow(true)
      }

      if (window.scrollY < height && shadow) {
        setShadow(false)
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [height, shadow])

  return shadow
}

export default useScrollShadow

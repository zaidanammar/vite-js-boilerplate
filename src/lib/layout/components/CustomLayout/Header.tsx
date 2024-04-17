import { Button, Layout, Tag } from 'antd'
import { createStyles } from 'antd-style'
import startCase from 'lodash/startCase'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

import Logo from '@/lib/components/shared/Layout/logo'
import { deployContext, isProduction } from '@/lib/constants/env'
import { useBreakpointValue } from '@/lib/hooks/shared/useBreakPointValue'
import NavProfile from '@/lib/layout/components/CustomLayout/NavProfile'
import useScrollShadow from '@/lib/layout/hooks/useScrollShadow'

import { useLayoutStore } from './store'

const useStyles = createStyles({
  header: {
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    gap: '4px',
    padding: '0 12px',
  },
  profileBox: {
    marginLeft: 'auto',
  },
})
type HeaderProps = {
  pure?: boolean
}

const Header = ({ pure }: HeaderProps) => {
  const { collapsed, isMobileMenuOpen } = useLayoutStore((state) => ({
    collapsed: state.collapsed,
    isMobileMenuOpen: state.isMobileMenuOpen,
  }))
  const { setCollapsed, setIsMobileMenuOpen } = useLayoutStore((action) => ({
    setCollapsed: action.setCollapsed,
    setIsMobileMenuOpen: action.setIsMobileMenuOpen,
  }))
  const { isMobile } = useBreakpointValue()
  const shadow = useScrollShadow({
    height: 30,
  })

  const { styles } = useStyles()

  if (pure) {
    return null
  }

  const handleClickMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen)
      return
    }
    setCollapsed(!collapsed)
  }

  return (
    <Layout.Header
      className={styles.header}
      style={{
        boxShadow: shadow ? '0 2px 6px rgba(0,21,41,.08)' : 'none',
      }}
    >
      {!isMobile ? <Logo /> : null}
      <Button
        type="text"
        icon={collapsed || isMobile ? <FaAnglesRight /> : <FaAnglesLeft />}
        onClick={handleClickMenu}
      />
      {!isProduction ? <Tag color="red">{startCase(deployContext)}</Tag> : null}
      <div className={styles.profileBox}>
        <NavProfile />
      </div>
    </Layout.Header>
  )
}

export default Header

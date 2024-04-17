import { CloseOutlined } from '@ant-design/icons'
import { Button, Drawer, Flex } from 'antd'

import Logo from '@/lib/components/shared/Layout/logo'
import { useBreakpointValue } from '@/lib/hooks/shared/useBreakPointValue'

import MenuContent from './MenuContent'
import { useLayoutStore } from './store'

const MobileMenu = () => {
  const isMobileMenuOpen = useLayoutStore((state) => state.isMobileMenuOpen)
  const setIsMobileMenuOpen = useLayoutStore(
    (action) => action.setIsMobileMenuOpen
  )
  const handleClose = () => setIsMobileMenuOpen(false)
  const { isMobile } = useBreakpointValue()

  if (!isMobile) {
    return null
  }

  return (
    <Drawer
      open={isMobileMenuOpen}
      onClose={handleClose}
      placement="left"
      closeIcon={false}
    >
      <Flex justify="space-between" align="center">
        <Logo />
        <Button
          size="small"
          type="text"
          icon={<CloseOutlined />}
          onClick={handleClose}
        />
      </Flex>
      <MenuContent />
    </Drawer>
  )
}

export default MobileMenu

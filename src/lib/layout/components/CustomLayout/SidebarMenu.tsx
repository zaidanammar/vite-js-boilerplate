/* eslint-disable @typescript-eslint/naming-convention */
import { Layout } from 'antd'
import { createStyles, css } from 'antd-style'

import { useBreakpointValue } from '@/lib/hooks/shared/useBreakPointValue'

import { sidebarCollapsedWidth, sidebarWidth } from './constants'
import MenuContent from './MenuContent'
import { useLayoutStore } from './store'

const useStyles = createStyles({
  siderForcePosition: css`
    position: fixed !important;
  `,
  sider: {
    boxShadow: 'var(--ant-box-shadow)',
    zIndex: 4,
    overflow: 'auto',
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    height: 'calc(100dvh - 72px)',
    '::-webkit-scrollbar': {
      opacity: 0,
      width: '0.5rem',
    },
    ':hover': {
      '::-webkit-scrollbar': {
        opacity: 1,
      },
      '::-webkit-scrollbar-thumb': {
        background: '#bbb',
        borderRadius: '6px',
      },
      '::-webkit-scrollbar-thumb:horizontal': {
        display: 'none',
      },
    },
  },
})

type SidebarMenuProps = {
  pure?: boolean
}

const SidebarMenu = ({ pure }: SidebarMenuProps) => {
  const { styles, cx } = useStyles()
  const collapsed = useLayoutStore((state) => state.collapsed)
  const { isMobile } = useBreakpointValue()

  if (pure || isMobile) {
    return null
  }

  return (
    <Layout.Sider
      collapsed={collapsed}
      width={sidebarWidth}
      collapsedWidth={sidebarCollapsedWidth}
      className={cx(styles.siderForcePosition, styles.sider)}
    >
      <MenuContent />
    </Layout.Sider>
  )
}

export default SidebarMenu

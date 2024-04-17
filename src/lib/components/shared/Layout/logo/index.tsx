import { Flex, Typography } from 'antd'

import { useLayoutStore } from '@/lib/layout/components/CustomLayout/store'

import LogoThumbnail from './LogoThumbnail'

const Logo = () => {
  const collapsed = useLayoutStore((state) => state.collapsed)

  return (
    <Flex gap={8} align="center">
      <LogoThumbnail />
      {!collapsed && (
        <Typography.Title
          style={{
            marginTop: 4,
          }}
          level={2}
        >
          Posy Resto
        </Typography.Title>
      )}
    </Flex>
  )
}

export default Logo

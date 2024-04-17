import { Menu } from 'antd'
import { SubMenuType } from 'antd/es/menu/hooks/useItems'
import { createStyles } from 'antd-style'
import { Link, useLocation } from 'react-router-dom'

import {
  NavigationItem,
  NavigationMenuItemType,
  navigationMenus,
} from '@/lib/constants/menuConfig'
import { useBreakpointValue } from '@/lib/hooks/shared/useBreakPointValue'
import { useLayoutStore } from '@/lib/layout/components/CustomLayout/store'

const MenuLabel = (item: NavigationItem) => {
  const { label, path } = item as NavigationMenuItemType
  if (item === null) {
    return null
  }

  if ((item as SubMenuType).children || !path) {
    return label
  }

  return <Link to={path}>{label}</Link>
}

type MenuItemsProps = {
  navigationMenus: Array<NavigationItem>
}

const renderMenuItems = ({
  navigationMenus,
}: MenuItemsProps): Array<NavigationItem> => {
  return navigationMenus.map((navigationMenu) => {
    return {
      ...navigationMenu,
      label: MenuLabel(navigationMenu),
      ...((navigationMenu as SubMenuType).children
        ? {
            children: renderMenuItems({
              navigationMenus: (navigationMenu as SubMenuType)
                .children as Array<NavigationItem>,
            }),
          }
        : null),
    }
  })
}

const useStyles = createStyles({
  menuContainer: {
    borderInlineEnd: 'none !important',
    margin: '0.75rem 0',
  },
})

const MenuContent = () => {
  const { styles } = useStyles()
  const isMobileMenuOpen = useLayoutStore((state) => state.isMobileMenuOpen)
  const setIsMobileMenuOpen = useLayoutStore(
    (action) => action.setIsMobileMenuOpen
  )
  const { isMobile } = useBreakpointValue()

  const { pathname } = useLocation()
  const defaultSelectedKeys = pathname.split('/').filter(Boolean)

  const handleClickMenu = () => {
    if (!isMobile) {
      return
    }
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Menu
      mode="inline"
      className={styles.menuContainer}
      defaultOpenKeys={defaultSelectedKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      items={renderMenuItems({ navigationMenus })}
      onClick={handleClickMenu}
    />
  )
}

export default MenuContent

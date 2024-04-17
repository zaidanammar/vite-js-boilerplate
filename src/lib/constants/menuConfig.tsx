import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems'
import { GoPeople } from 'react-icons/go'
import { IoDocuments } from 'react-icons/io5'
import { MdOutlineSubscriptions } from 'react-icons/md'

import {
  subscriptionHistoryMenuLabel,
  subscriptionPlanMenuLabel,
  outletMenuLabel,
  foodCategoryLabel,
  deliveryTransactionMenuLabel,
} from './menuLabel'
import {
  foodCategoryPath,
  outletPath,
  subscriptionHistoryPath,
  subscriptionPlanPath,
  deliveryTransactionPath,
} from './routes'

export type NavigationMenuItemType = {
  path?: string
} & MenuItemType

export type NavigationItem = NonNullable<ItemType<NavigationMenuItemType>>

export const subscriptionHistoryMenu: NavigationMenuItemType = {
  key: 'subscription-history',
  label: subscriptionHistoryMenuLabel,
  icon: <IoDocuments />,
  path: subscriptionHistoryPath,
}

export const subscriptionPlanMenu: NavigationMenuItemType = {
  key: 'subscription-plan',
  label: subscriptionPlanMenuLabel,
  icon: <IoDocuments />,
  path: subscriptionPlanPath,
}

export const outletMenu: NavigationMenuItemType = {
  key: 'outlet',
  label: outletMenuLabel,
  icon: <IoDocuments />,
  path: outletPath,
}

export const foodCategoryMenu: NavigationMenuItemType = {
  key: 'food-category',
  label: foodCategoryLabel,
  icon: <IoDocuments />,
  path: foodCategoryPath,
}

export const deliveryTransactionMenu: NavigationMenuItemType = {
  key: 'delivery-transaction',
  label: deliveryTransactionMenuLabel,
  icon: <IoDocuments />,
  path: deliveryTransactionPath,
}

export const navigationMenus: Array<NavigationItem> = [
  {
    key: 'user',
    label: 'User',
    icon: <GoPeople size={18} />,
    children: [outletMenu, foodCategoryMenu],
  },
  {
    key: 'subscription',
    label: 'Subscription',
    icon: <MdOutlineSubscriptions size={18} />,
    children: [subscriptionHistoryMenu],
  },
  {
    key: 'transaction',
    label: 'Transaction',
    icon: <MdOutlineSubscriptions size={18} />,
    children: [deliveryTransactionMenu],
  },
]

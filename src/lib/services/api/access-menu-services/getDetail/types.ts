import { AccessMenuKey } from '@/lib/services/api/access-menu-services/types'

export type UseGetAccessMenuDetailParams = {
  userTypeID?: string
}

export type GetAccessMenuDetailResponseData = {
  user_type_name: string
  status: boolean
  description: string
  access_menu: Array<AccessMenu>
}

export type AccessMenu = {
  key: AccessMenuKey
  enabled: boolean
  label: string
  category: string
}

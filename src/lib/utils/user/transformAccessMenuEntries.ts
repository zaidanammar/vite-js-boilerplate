import { AccessMenu } from '@/lib/services/api/access-menu-services/getDetail/types'
import { PartialAccessMenuMap } from '@/lib/services/api/access-menu-services/types'

export const transformAccessMenuEntries = (data: Array<AccessMenu>) => {
  return data.reduce((result, item) => {
    result[item.key] = item.enabled
    return result
  }, {} as PartialAccessMenuMap)
}

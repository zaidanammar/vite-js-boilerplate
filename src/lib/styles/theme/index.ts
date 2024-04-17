import type { ThemeConfig } from 'antd'

import { componentsToken } from '@/lib/styles/theme/components'
import { tokenConfig } from '@/lib/styles/theme/token'

export const appTheme: ThemeConfig = {
  token: tokenConfig,
  components: componentsToken,
  cssVar: true,
}

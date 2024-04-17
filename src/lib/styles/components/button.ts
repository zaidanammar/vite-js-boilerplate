/* eslint-disable @typescript-eslint/naming-convention */
import { CSSObject } from 'antd-style'

import { successColor, dangerColor, neutralColor } from '@/lib/constants/colors'

export const successButtonStyle: CSSObject = {
  backgroundColor: `${successColor['main']} !important`,
  ':hover': {
    opacity: '0.7 !important',
  },
  color: neutralColor['10'],
}

export const errorButtonStyle: CSSObject = {
  backgroundColor: dangerColor['main'],
  color: neutralColor['10'],
}

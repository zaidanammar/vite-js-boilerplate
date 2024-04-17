import { ThemeConfig } from 'antd'

import {
  borderColor,
  warningColor,
  primaryColor,
  highlightColor,
  layoutBackgroundColor,
  successColor,
  dangerColor,
} from '@/lib/constants/colors'

export const tokenConfig: ThemeConfig['token'] = {
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  colorPrimary: primaryColor['main'],
  colorInfo: primaryColor['main'],
  colorSuccess: successColor['main'],
  colorError: dangerColor['main'],
  colorBgLayout: layoutBackgroundColor,
  colorHighlight: highlightColor,
  colorWarning: warningColor['main'],
  colorBorder: borderColor,
  controlHeight: 36,
  controlHeightLG: 42,
  controlHeightSM: 32,
  borderRadius: 6,
  fontSize: 14,
  fontSizeHeading1: 30,
  fontSizeHeading2: 22,
  fontSizeHeading3: 20,
  fontSizeHeading4: 17,
  fontSizeHeading5: 12,
  boxShadow: '0 1px 4px -1px rgba(0,0,0,.15)',
}

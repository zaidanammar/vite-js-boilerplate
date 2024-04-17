import { ConfigProviderProps, ThemeConfig } from 'antd'

import { infoColor, neutralColor, primaryColor } from '@/lib/constants/colors'
import { validateMessages } from '@/lib/constants/form'

export const componentsToken: ThemeConfig['components'] = {
  Button: {
    primaryShadow: '0 2px 0 rgba(0,0,0,0.045)',
    defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
    borderRadius: 6,

    // default
    defaultBorderColor: primaryColor['main'],
    defaultBg: neutralColor['10'],

    // disabled
    colorBgContainerDisabled: neutralColor['30'],
    colorTextDisabled: neutralColor['60'],
    borderColorDisabled: neutralColor['100'],
  },
  Input: {
    borderRadius: 6,
  },
  Tabs: {
    cardPadding: '8px 0',
    cardGutter: 2,
    horizontalMargin: '0 32px 0 0',
    horizontalItemMargin: '0 32px 0 0',
    itemActiveColor: primaryColor['main'],
    itemSelectedColor: primaryColor['main'],
  },
  DatePicker: {
    controlHeightSM: 24,
  },
  Menu: {
    itemMarginInline: 0,
    itemMarginBlock: 4,
    itemBorderRadius: 0,
    itemPaddingInline: 16,
    activeBarWidth: 3,
    subMenuItemBg: 'transparent',
  },
  Segmented: {
    colorBgLayout: 'rgba(0,0,0,.04)',
    borderRadiusSM: 10,
  },
  Pagination: {
    borderRadius: 50,
    colorPrimary: neutralColor['10'],
    colorPrimaryHover: neutralColor['10'],
    itemActiveBg: primaryColor['main'],
  },
  Tag: {
    lineWidth: 0,
  },
  Modal: {
    titleFontSize: 20,
  },
  Layout: {
    headerBg: neutralColor['10'],
    headerPadding: 0,
    siderBg: neutralColor['10'],
  },
  Typography: {
    titleMarginTop: 0,
    titleMarginBottom: '0.5rem',
    colorText: neutralColor['100'],
  },
  Select: {
    optionSelectedBg: infoColor['surface-table'],
  },
}

export const componentsConfig: ConfigProviderProps = {
  modal: {
    styles: {
      header: {
        paddingBottom: '0.75rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #e4e4e4',
      },
      mask: {
        backdropFilter: 'blur(8px)',
      },
    },
  },
  form: {
    validateMessages: validateMessages,
  },
  space: {
    style: {
      width: '100%',
    },
  },
  datePicker: {
    style: {
      width: '100%',
    },
  },
}

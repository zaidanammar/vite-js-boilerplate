import { CSSObject } from 'antd-style'

export const hiddenForPrint: CSSObject = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '@media print': {
    visibility: 'hidden',
  },
}

import { Layout, Typography } from 'antd'
import { createStyles } from 'antd-style'

import { useBreakpointValue } from '@/lib/hooks/shared/useBreakPointValue'
import { hiddenForPrint } from '@/lib/styles/components/visibility'

const useStyles = createStyles({
  footer: hiddenForPrint,
  footerMobile: {
    textAlign: 'center',
    transform: 'scale(0.8)',
  },
})

type FooterProps = {
  pure?: boolean
}

const Footer = ({ pure }: FooterProps) => {
  const { styles, cx } = useStyles()
  const { isMobile } = useBreakpointValue()
  if (pure) {
    return null
  }

  return (
    <Layout.Footer
      className={cx(styles.footer, isMobile && styles.footerMobile)}
    >
      Copyright &copy; {new Date().getFullYear()}{' '}
      <Typography.Text strong>Posy Resto</Typography.Text> All rights reserved.
    </Layout.Footer>
  )
}

export default Footer

import { FloatButton, Layout } from 'antd'
import { createStyles } from 'antd-style'

import {
  sidebarCollapsedWidth,
  sidebarWidth,
} from '@/lib/layout/components/CustomLayout/constants'
import { useLayoutStore } from '@/lib/layout/components/CustomLayout/store'

import ContentWrapper from './ContentWrapper'
import Footer from './Footer'
import Header from './Header'
import MobileMenu from './MobileMenu'
import SidebarMenu from './SidebarMenu'

const useStyles = createStyles(({ css, responsive }) => ({
  contentLayout: css`
    ${responsive.tablet} {
      padding-left: 0;
    }
    padding-left: ${sidebarWidth}px;
    transition: 0.3s all ease;
  `,
  contentCollapsed: {
    paddingLeft: sidebarCollapsedWidth,
  },
}))

const CustomLayout = ({ children }: React.PropsWithChildren) => {
  const { collapsed } = useLayoutStore()
  const { styles, cx } = useStyles()

  return (
    <Layout>
      <Header />
      <Layout>
        <SidebarMenu />
        <Layout
          className={cx(
            styles.contentLayout,
            collapsed && styles.contentCollapsed
          )}
        >
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </Layout>
      </Layout>
      <MobileMenu />
      <FloatButton.BackTop />
    </Layout>
  )
}

export default CustomLayout

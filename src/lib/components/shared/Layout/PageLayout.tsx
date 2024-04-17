import { Breadcrumb, BreadcrumbProps, Card } from 'antd'
import { createStyles } from 'antd-style'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const useStyles = createStyles(({ responsive }) => ({
  containerCardWrapper: {
    margin: '20px',
  },
  pageHeaderWrapper: {
    borderBottom: '1px solid #e8e8e8',
    marginBottom: '16px',
  },
  pageContentWrapper: {
    margin: '0 auto',
  },
  container: {
    margin: '0 auto',
    [responsive.laptop]: {
      maxWidth: 960,
    },
    [responsive.xl]: {
      maxWidth: 1380,
    },
    [responsive.desktop]: {
      maxWidth: 1500,
    },
  },
}))

type PageLayoutProps = {
  header?: React.ReactNode
  breadCrumbItems?: BreadcrumbProps['items']
  children: React.ReactNode
}

const PageLayout = ({ header, breadCrumbItems, children }: PageLayoutProps) => {
  const { styles, cx } = useStyles()

  return (
    <Card className={styles.containerCardWrapper}>
      {header || breadCrumbItems?.length ? (
        <div className={styles.pageHeaderWrapper}>
          <div className={styles.container}>
            {breadCrumbItems?.length ? (
              <Breadcrumb
                items={breadCrumbItems}
                separator={<FaChevronRight />}
              />
            ) : null}
            {header}
          </div>
        </div>
      ) : null}

      <div className={cx(styles.pageContentWrapper, styles.container)}>
        {children}
      </div>
    </Card>
  )
}

export default PageLayout

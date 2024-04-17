import { LoadingOutlined } from '@ant-design/icons'
import { Card, Spin, Tag } from 'antd'
import { createStyles } from 'antd-style'

import PageLayout from '@/lib/components/shared/Layout/PageLayout'
import { primaryColor } from '@/lib/constants/colors'

const useStyles = createStyles({
  card: {
    minHeight: '70vh',
  },
})

const PageSkeleton = () => {
  const { styles } = useStyles()

  return (
    <PageLayout
      breadCrumbItems={[
        { title: <LoadingOutlined /> },
        { title: <Tag color={primaryColor.main}>Mohon Tunggu...</Tag> },
      ]}
    >
      <Spin tip="Mohon tunggu...">
        <Card className={styles.card} />
      </Spin>
    </PageLayout>
  )
}

export default PageSkeleton

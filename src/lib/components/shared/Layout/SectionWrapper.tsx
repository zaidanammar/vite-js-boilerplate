import { Divider, Space, Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import { createStyles } from 'antd-style'
import React from 'react'

type SectionWrapperProps = React.PropsWithChildren<{
  title?: string
  titleLevel?: TitleProps['level']
}>

const useStyles = createStyles({
  divider: {
    margin: '0.375rem 0',
  },
  title: {
    marginTop: 0,
  },
})

const SectionWrapper = ({
  title,
  titleLevel = 4,
  children,
}: SectionWrapperProps) => {
  const { styles } = useStyles()

  return (
    <Space size="small" direction="vertical">
      {title ? (
        <div>
          <Typography.Title className={styles.title} level={titleLevel}>
            {title}
          </Typography.Title>
          <Divider className={styles.divider} />
        </div>
      ) : null}
      {children}
    </Space>
  )
}

export default SectionWrapper

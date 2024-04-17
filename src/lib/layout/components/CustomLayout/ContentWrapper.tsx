import { Layout } from 'antd'
import React from 'react'

type ContentWrapperProps = React.PropsWithChildren<{
  pure?: boolean
}>

const ContentWrapper = ({ pure, children }: ContentWrapperProps) => {
  if (pure) {
    return children
  }

  return (
    <Layout.Content
      style={{ minHeight: pure ? '100dvh' : 'calc(100dvh - 155px)' }}
    >
      {children}
    </Layout.Content>
  )
}

export default ContentWrapper

import { Flex, Typography } from 'antd'
import React from 'react'

type HorizontalDisplayTextProps = React.PropsWithChildren<{
  label: string
  boldLabel?: boolean
  boldValue?: boolean
}>

export const HorizontalDisplayText = ({
  label,
  children,
  boldLabel = false,
  boldValue = false,
}: HorizontalDisplayTextProps) => {
  return (
    <Flex justify="space-between" align="center" gap={4}>
      <Typography.Text strong={boldLabel}>{label}</Typography.Text>
      <Typography.Text strong={boldValue}>{children}</Typography.Text>
    </Flex>
  )
}

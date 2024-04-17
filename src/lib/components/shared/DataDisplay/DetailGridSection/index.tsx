import { Descriptions, DescriptionsProps } from 'antd'
import { DescriptionsItemProps } from 'antd/lib/descriptions/Item'

export type DetailGridItemProps = {
  show?: boolean
} & DescriptionsItemProps

export type DetailGridSectionProps = {
  items: Array<DetailGridItemProps>
  wrapperProps?: DescriptionsProps
}

const DetailGridSection = ({ items, wrapperProps }: DetailGridSectionProps) => {
  return (
    <Descriptions layout="vertical" colon={false} {...wrapperProps}>
      {items
        .filter((item) => item.show !== false)
        .map((item) => (
          <Descriptions.Item key={String(item.label)} {...item} />
        ))}
    </Descriptions>
  )
}

export default DetailGridSection

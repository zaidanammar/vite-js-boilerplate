import { Card, Divider, Row, Typography, UploadProps } from 'antd'

import { InputItemProps } from '@/lib/components/shared/DataEntry/InputItem'
import UploadInput from '@/lib/components/shared/DataEntry/UploadInput'

export type DocumentInputCardProps = React.PropsWithChildren<{
  title: string
  documentInputItemProps: InputItemProps
  uploadInputProps?: UploadProps
}>

const DocumentInputCard = ({
  title,
  children,
  documentInputItemProps,
}: DocumentInputCardProps) => {
  return (
    <Card>
      <Typography.Text>{title}</Typography.Text>
      <Divider />
      {children}
      <Row gutter={16}>
        <UploadInput
          inputWrapper={{
            label: 'Upload Dokumen',
            fullWidth: true,
            rules: [{ required: true }],
            ...documentInputItemProps,
          }}
        />
      </Row>
    </Card>
  )
}

export default DocumentInputCard

import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload, UploadProps } from 'antd'

import InputItem, {
  InputItemProps,
} from '@/lib/components/shared/DataEntry/InputItem'
import { imageFileTypes } from '@/lib/constants/fileTypes'
import { singleFile } from '@/lib/utils/input/upload'

type UploadInputProps = {
  inputWrapper?: InputItemProps
  uploadProps?: UploadProps
}

const UploadInput = ({ inputWrapper, uploadProps }: UploadInputProps) => {
  return (
    <InputItem
      valuePropName="fileList"
      getValueFromEvent={singleFile}
      {...inputWrapper}
    >
      <Upload
        multiple={false}
        beforeUpload={() => false}
        listType="picture"
        accept={imageFileTypes.join(',')}
        {...uploadProps}
      >
        <Button type="primary" block>
          Upload Dokumen <UploadOutlined />
        </Button>
      </Upload>
    </InputItem>
  )
}

export default UploadInput

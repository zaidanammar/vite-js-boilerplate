import { CloudUploadOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Col,
  Form,
  FormInstance,
  Row,
  Space,
  Spin,
  Tooltip,
  Upload,
} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import { singleFile } from '@/lib/utils/input/upload'

type Values = unknown

type UploadBulkEntriesWrapperProps<FormType> = {
  form: FormInstance<FormType>
  topInputs?: React.ReactNode
  isValidating?: boolean
  isDownloadTemplateDisabled?: boolean
  downloadTemplateHelperDescription?: string
  backToPath: string
  validateButtonText?: string
  isLoadingTemplate?: boolean
  handleDownloadTemplate: () => void | Promise<void>
  handleValidateEntries: (values: FormType) => void
}

const UploadBulkEntriesWrapper = <FormType extends Values = unknown>({
  form,
  topInputs,
  isValidating = false,
  isDownloadTemplateDisabled,
  downloadTemplateHelperDescription,
  backToPath,
  validateButtonText = 'Submit',
  isLoadingTemplate = false,
  handleDownloadTemplate,
  handleValidateEntries,
}: UploadBulkEntriesWrapperProps<FormType>) => {
  return (
    <Spin spinning={isValidating} tip="Mohon Tunggu...">
      <Card style={{ margin: 'auto' }}>
        <Form layout="vertical" form={form} onFinish={handleValidateEntries}>
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            {topInputs ? (
              <Row gutter={16} align="middle">
                {topInputs}
              </Row>
            ) : null}

            <Form.Item
              name="excel_file"
              rules={[
                {
                  required: true,
                  message: 'Dokumen harus dipilih terlebih dahulu',
                },
              ]}
              valuePropName="fileList"
              getValueFromEvent={singleFile}
            >
              <Upload.Dragger
                multiple={false}
                listType="picture"
                beforeUpload={() => false}
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              >
                <p className="ant-upload-drag-icon">
                  <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">
                  Silakan Drag and Drop untuk upload
                  <br /> dokumen template yang telah diisi.
                </p>
              </Upload.Dragger>
            </Form.Item>

            <Row gutter={[16, 16]}>
              <Col span={24} lg={12}>
                <Tooltip
                  title={
                    isDownloadTemplateDisabled
                      ? downloadTemplateHelperDescription
                      : undefined
                  }
                >
                  <Button
                    type="primary"
                    onClick={handleDownloadTemplate}
                    disabled={isDownloadTemplateDisabled}
                    loading={isLoadingTemplate}
                  >
                    Download Template
                  </Button>
                </Tooltip>
              </Col>

              <Col span={24} md={12} lg={6} style={{ marginLeft: 'auto' }}>
                <Link to={backToPath}>
                  <Button block disabled={isValidating}>
                    Kembali
                  </Button>
                </Link>
              </Col>
              <Col span={24} md={12} lg={6}>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  loading={isValidating}
                >
                  {validateButtonText}
                </Button>
              </Col>
            </Row>
          </Space>
        </Form>
      </Card>
    </Spin>
  )
}

export default UploadBulkEntriesWrapper

import { Form, FormInstance, Input, Row } from 'antd'
import { DefaultOptionType } from 'antd/es/select'

import InputItem from '@/lib/components/shared/DataEntry/InputItem'
import SearchableSelect from '@/lib/components/shared/DataEntry/SearchableSelect'
import {
  nameValidation,
  numericOnlyValidation,
} from '@/lib/constants/validations'

type BankInformationFormProps = {
  form: FormInstance
  bankOptions: Array<DefaultOptionType>
  fieldPrefix?: Array<string | number>
  listPrefix?: Array<string | number>
  extra?: React.ReactNode
}

const BankInformationForm = ({
  form,
  bankOptions,
  fieldPrefix = [],
  listPrefix = [],
  extra,
}: BankInformationFormProps) => {
  const handleSelectBank = (_: string, optionItem: DefaultOptionType) => {
    const bankName = optionItem.label
    form.setFieldValue([...listPrefix, ...fieldPrefix, 'bank_name'], bankName)
  }

  return (
    <Row gutter={16} align="middle">
      <Form.Item hidden name={[...fieldPrefix, 'bank_name']} />
      <InputItem
        label="Nama Bank"
        rules={[{ required: true }]}
        name={[...fieldPrefix, 'bank_id']}
      >
        <SearchableSelect
          placeholder="Pilih Bank"
          options={bankOptions}
          onSelect={handleSelectBank}
        />
      </InputItem>
      <InputItem
        label="Nomor Rekening"
        rules={numericOnlyValidation({
          isRequired: true,
          fieldName: 'Nomor Rekening',
        })}
        name={[...fieldPrefix, 'bank_account_number']}
      >
        <Input placeholder="Masukkan Nomor Rekening" />
      </InputItem>
      <InputItem
        label="Nama Pemilik Rekening"
        rules={nameValidation({
          isRequired: true,
          fieldName: 'Nama Pemilik Rekening',
        })}
        name={[...fieldPrefix, 'bank_account_name']}
      >
        <Input placeholder="Masukkan Nama Pemilik Rekening" />
      </InputItem>
      {extra}
    </Row>
  )
}

export default BankInformationForm

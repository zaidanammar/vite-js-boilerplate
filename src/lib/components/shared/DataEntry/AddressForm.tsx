import { Input, Row } from 'antd'

import InputItem from '@/lib/components/shared/DataEntry/InputItem'
import SearchableSelect from '@/lib/components/shared/DataEntry/SearchableSelect'
import {
  UseAddressFormParams,
  useAddressForm,
} from '@/lib/hooks/address/useAddressForm'

const addressValidateMessage = 'Alamat harus diisi terlebih dahulu'

type AddressFormProps = UseAddressFormParams

const AddressForm = ({
  form,
  detailData,
  fieldPrefix = [],
}: AddressFormProps) => {
  const {
    provinceOptions,
    cityOptions,
    districtOptions,
    subDistrictOptions,
    handleChangeProvince,
    handleChangeCity,
    handleChangeDistrict,
    handleChangeSubDistrict,
  } = useAddressForm({
    form,
    detailData,
    fieldPrefix,
  })

  return (
    <Row gutter={16}>
      <InputItem
        wrapperProps={{ md: 12, lg: 16, xl: 12 }}
        name={[...fieldPrefix, 'address']}
        label="Alamat Lengkap"
        rules={[
          {
            required: true,
            message: addressValidateMessage,
          },
        ]}
      >
        <Input.TextArea placeholder="Masukan alamat" />
      </InputItem>
      {/* <InputItem
        name={[...fieldPrefix, 'address_rt']}
        label="RT"
        rules={[
          {
            required: true,
            message: 'RT harus diisi terlebih dahulu',
          },
        ]}
      >
        <Input type="number" placeholder="Masukan RT" />
      </InputItem>
      <InputItem
        name={[...fieldPrefix, 'address_rw']}
        label="RW"
        rules={[
          {
            required: true,
            message: 'RW harus diisi terlebih dahulu',
          },
        ]}
      >
        <Input type="number" placeholder="Masukan RW" />
      </InputItem> */}
      <InputItem
        name={[...fieldPrefix, 'province']}
        label="Provinsi"
        rules={[
          {
            required: true,
            message: 'Provinsi harus diisi terlebih dahulu',
          },
        ]}
      >
        <SearchableSelect
          placeholder="Pilih"
          options={provinceOptions}
          onSelect={handleChangeProvince}
        />
      </InputItem>
      <InputItem
        name={[...fieldPrefix, 'city']}
        label="Kota / Kabupaten"
        rules={[
          {
            required: true,
            message: 'Kota harus diisi terlebih dahulu',
          },
        ]}
      >
        <SearchableSelect
          placeholder="Pilih Kota/Kabupaten"
          options={cityOptions}
          onSelect={handleChangeCity}
          disabled={!cityOptions.length}
        />
      </InputItem>
      <InputItem
        name={[...fieldPrefix, 'district']}
        label="Kecamatan"
        rules={[
          {
            required: true,
            message: 'Kecamatan harus diisi terlebih dahulu',
          },
        ]}
      >
        <SearchableSelect
          placeholder="Pilih Kecamatan"
          options={districtOptions}
          onSelect={handleChangeDistrict}
          disabled={!districtOptions.length}
        />
      </InputItem>
      <InputItem
        name={[...fieldPrefix, 'sub_district']}
        label="Kelurahan"
        rules={[
          {
            required: true,
            message: 'Kelurahan harus diisi terlebih dahulu',
          },
        ]}
      >
        <SearchableSelect
          placeholder="Pilih"
          options={subDistrictOptions}
          onSelect={handleChangeSubDistrict}
          disabled={!subDistrictOptions.length}
        />
      </InputItem>
      <InputItem
        name={[...fieldPrefix, 'post_code']}
        label="Kode POS"
        rules={[
          {
            required: true,
            message: 'Kode pos harus diisi terlebih dahulu',
          },
        ]}
      >
        <Input type="number" placeholder="Masukan kode pos" disabled />
      </InputItem>
    </Row>
  )
}

export default AddressForm

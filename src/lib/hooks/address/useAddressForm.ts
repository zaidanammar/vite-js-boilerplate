import { Form, FormInstance } from 'antd'
import set from 'lodash/set'
import React from 'react'

import { AddressInformation } from '@/lib/models/address'
import { useGetAllCity } from '@/lib/services/api/master-services/area/getAllCity'
import { useGetAllDistrict } from '@/lib/services/api/master-services/area/getAllDistrict'
import { useGetAllProvince } from '@/lib/services/api/master-services/area/getAllProvince'
import { useGetAllSubDistrict } from '@/lib/services/api/master-services/area/getAllSubDistrict'

export type UseAddressFormParams = {
  form: FormInstance
  detailData?: Partial<AddressInformation>
  fieldPrefix?: Array<string>
}

export const useAddressForm = ({
  form,
  detailData,
  fieldPrefix = [],
}: // eslint-disable-next-line sonarjs/cognitive-complexity
UseAddressFormParams) => {
  const { data: provinceList } = useGetAllProvince()
  const { data: cityList, mutate: getAllCity } = useGetAllCity()
  const {
    data: districtList,
    mutate: getAllDistrict,
    reset: resetDistrictList,
  } = useGetAllDistrict()
  const {
    data: subDistrictList,
    mutate: getAllSubDistrict,
    reset: resetSubDistrictList,
  } = useGetAllSubDistrict()
  const fieldPrefixString = `${fieldPrefix.join('.')}${
    fieldPrefix.length ? '.' : ''
  }`

  const province = Form.useWatch([...fieldPrefix, 'province'], form)
  const city = Form.useWatch([...fieldPrefix, 'city'], form)

  const { setFieldsValue } = form

  const provinceOptions = React.useMemo(
    () =>
      (provinceList ?? []).map((entry) => ({
        value: entry.province,
        label: entry.province,
      })),
    [provinceList]
  )

  const cityOptions = React.useMemo(
    () =>
      (cityList ?? []).map((entry) => ({
        value: entry.city,
        label: entry.city,
      })),
    [cityList]
  )

  const districtOptions = React.useMemo(
    () =>
      (districtList ?? []).map((entry) => ({
        value: entry.district,
        label: entry.district,
      })),
    [districtList]
  )

  const subDistrictOptions = React.useMemo(
    () =>
      (subDistrictList ?? []).map((entry) => ({
        value: entry.sub_district,
        label: entry.sub_district,
      })),
    [subDistrictList]
  )

  const handleChangeProvince = React.useCallback(
    (value: string) => {
      const updateValues = {}
      set(updateValues, `${fieldPrefixString}city`, undefined)
      set(updateValues, `${fieldPrefixString}district`, undefined)
      set(updateValues, `${fieldPrefixString}sub_district`, undefined)
      set(updateValues, `${fieldPrefixString}post_code`, undefined)

      setFieldsValue(updateValues)
      getAllCity({ province: value })
      resetDistrictList()
      resetSubDistrictList()
    },
    [
      fieldPrefixString,
      getAllCity,
      resetDistrictList,
      resetSubDistrictList,
      setFieldsValue,
    ]
  )

  const handleChangeCity = React.useCallback(
    (value: string) => {
      const updateValues = {}
      set(updateValues, `${fieldPrefixString}district`, undefined)
      set(updateValues, `${fieldPrefixString}sub_district`, undefined)
      set(updateValues, `${fieldPrefixString}post_code`, undefined)
      setFieldsValue(updateValues)
      getAllDistrict({
        province,
        city: value,
      })
      resetSubDistrictList()
    },
    [
      fieldPrefixString,
      province,
      getAllDistrict,
      resetSubDistrictList,
      setFieldsValue,
    ]
  )

  const handleChangeDistrict = React.useCallback(
    (value: string) => {
      const updateValues = {}
      set(updateValues, `${fieldPrefixString}sub_district`, undefined)
      set(updateValues, `${fieldPrefixString}post_code`, undefined)
      setFieldsValue(updateValues)
      getAllSubDistrict({
        province,
        city,
        district: value,
      })
    },
    [fieldPrefixString, setFieldsValue, getAllSubDistrict, province, city]
  )

  const handleChangeSubDistrict = React.useCallback(
    (value: string) => {
      if (subDistrictList && subDistrictList.length > 0) {
        const selectedSubDistrict = subDistrictList.find(
          (x: { sub_district: string }) => x.sub_district === value
        )
        if (selectedSubDistrict) {
          const updateValues = {}
          set(
            updateValues,
            `${fieldPrefixString}post_code`,
            String(selectedSubDistrict.post_code)
          )
          setFieldsValue(updateValues)
        }
      }
    },
    [subDistrictList, setFieldsValue, fieldPrefixString]
  )

  const handlePrefillAddressForm = React.useCallback(async () => {
    if (!detailData || !detailData.province) {
      return
    }

    const province = detailData['province']
    if (!province) {
      return
    }
    await getAllCity({ province })

    const city = detailData['city']
    if (!city) {
      return
    }
    await getAllDistrict({
      province,
      city,
    })

    const district = detailData['district']
    if (!district) {
      return
    }
    await getAllSubDistrict({
      province,
      city,
      district,
    })
  }, [detailData, getAllCity, getAllDistrict, getAllSubDistrict])

  React.useEffect(() => {
    handlePrefillAddressForm()
  }, [handlePrefillAddressForm])

  return {
    provinceOptions,
    cityOptions,
    districtOptions,
    subDistrictOptions,
    handleChangeProvince,
    handleChangeCity,
    handleChangeDistrict,
    handleChangeSubDistrict,
  }
}

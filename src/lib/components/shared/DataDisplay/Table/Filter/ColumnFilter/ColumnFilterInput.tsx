import { DatePicker, Input } from 'antd'
import { FilterDropdownProps } from 'antd/lib/table/interface'
import dayjs from 'dayjs'
import { Key } from 'react'

import NumericFormatInput from '@/lib/components/shared/DataEntry/NumericFormatInput'
import { DATE_FORMAT_YYYY_MM_DD } from '@/lib/constants/date'
import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'

import CTAColumnFilter from './CTAColumnFilter'
import { GetColumnFilterProps } from './getColumnFilterProps'

type ColumnFilterInputProps = GetColumnFilterProps & FilterDropdownProps

const ColumnFilterInput = ({
  fieldName,
  fieldType = 'text',
  ...filterDropdownProps
}: ColumnFilterInputProps) => {
  const { selectedKeys, setSelectedKeys, confirm } = filterDropdownProps

  const { getSearchParamsValue, onChangeFilterWithParams } = useQueryParams()

  const defaultDateValue =
    getSearchParamsValue(String(fieldName))?.split('&&') ||
    selectedKeys[0]?.toString()?.split('&&')

  const startDate = dayjs(defaultDateValue?.[0])
  const endDate = dayjs(defaultDateValue?.[1])

  const handleSearch = (
    selectedKeys: Array<string>,
    confirm: FilterDropdownProps['confirm'],
    fieldName: string
  ) => {
    onChangeFilterWithParams({ [fieldName]: selectedKeys[0] })
    setTimeout(() => {
      confirm()
    }, 100)
  }

  const handleReset = (
    clearFilters: () => void,
    confirm: FilterDropdownProps['confirm'],
    fieldName: string
  ) => {
    onChangeFilterWithParams({ [fieldName]: '' })
    clearFilters()
    setTimeout(() => {
      confirm()
    }, 100)
  }

  const fieldRenderMap = {
    text: () => (
      <Input
        placeholder="Search here..."
        value={selectedKeys[0]}
        defaultValue={
          !selectedKeys[0] ? getSearchParamsValue(String(fieldName)) : undefined
        }
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() =>
          handleSearch(
            selectedKeys as Array<string>,
            confirm,
            String(fieldName)
          )
        }
        style={{ marginBottom: 8, display: 'block' }}
      />
    ),
    date: () => (
      <DatePicker.RangePicker
        value={defaultDateValue ? [startDate, endDate] : null}
        onChange={(e) => {
          const startDate = dayjs(e?.[0]).format(DATE_FORMAT_YYYY_MM_DD)
          const endDate = dayjs(e?.[1]).format(DATE_FORMAT_YYYY_MM_DD)
          const date = `${startDate}&&${endDate}`
          setSelectedKeys([date])
        }}
        style={{ marginBottom: 8, width: '100%' }}
        disabledDate={(current) => current?.isAfter(dayjs())}
        allowClear={false}
      />
    ),
    number: () => (
      <NumericFormatInput
        placeholder="Search here..."
        value={
          Number(selectedKeys[0]) ||
          Number(getSearchParamsValue(String(fieldName)))
        }
        onChange={(e) => setSelectedKeys(e ? [e as Key] : [])}
        onPressEnter={() =>
          handleSearch(
            selectedKeys as Array<string>,
            confirm,
            String(fieldName)
          )
        }
        style={{ marginBottom: 8, display: 'block' }}
      />
    ),
  }

  return (
    <div
      style={{ padding: 8, width: 200 }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {fieldRenderMap[fieldType]?.()}
      <CTAColumnFilter
        fieldName={fieldName}
        handleReset={handleReset}
        handleSearch={handleSearch}
        {...filterDropdownProps}
      />
    </div>
  )
}

export default ColumnFilterInput

import { FilterDropdownProps } from 'antd/lib/table/interface'

import SearchableSelect from '@/lib/components/shared/DataEntry/SearchableSelect'
import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'

import CTAColumnFilter from './CTAColumnFilter'
import { GetColumnSearchableFilterProps } from './getColumnFilterProps'

type ColumnSearchableFilterInputProps = GetColumnSearchableFilterProps &
  FilterDropdownProps

const ColumnSearchableFilterInput = ({
  fieldName,
  options,
  ...filterDropdownProps
}: ColumnSearchableFilterInputProps) => {
  const { getSearchParamsValue, onChangeFilterWithParams } = useQueryParams()

  const { selectedKeys, setSelectedKeys } = filterDropdownProps

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

  return (
    <div
      style={{ padding: 8, width: 200 }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <SearchableSelect
        options={options}
        value={selectedKeys[0]}
        placeholder="Search here..."
        defaultValue={getSearchParamsValue(String(fieldName))}
        onChange={(e) => setSelectedKeys(e ? [e] : [])}
        style={{ marginBottom: 8, display: 'block' }}
        allowClear={false}
      />
      <CTAColumnFilter
        fieldName={fieldName}
        handleReset={handleReset}
        handleSearch={handleSearch}
        {...filterDropdownProps}
      />
    </div>
  )
}

export default ColumnSearchableFilterInput

import { TableColumnType } from 'antd'

import { useQueryParams } from '@/lib/hooks/shared/useQueryParams'

import ColumnFilterInput from './ColumnFilterInput'
import ColumnSearchableFilterInput from './ColumnSearchableFilterInput'
import FilterIcon from './FilterIcon'

export type GetColumnFilterProps = {
  fieldName: string
  fieldType?: 'text' | 'date' | 'number'
}

export type GetColumnSearchableFilterProps = {
  fieldName: string
  options: Array<{ label: string; value: string | number }>
}

export const useGetColumnFilterProps = <DataType = unknown,>() => {
  const { getSearchParamsValue } = useQueryParams()

  const getColumnFilterProps = ({
    fieldName,
    fieldType = 'text',
  }: GetColumnFilterProps): TableColumnType<DataType> => ({
    filterDropdown: (filterDropdownProps): React.ReactElement => (
      <ColumnFilterInput
        fieldName={fieldName}
        fieldType={fieldType}
        {...filterDropdownProps}
      />
    ),
    filterIcon: (filtered: boolean) => {
      const value = getSearchParamsValue(String(fieldName))
      return FilterIcon(!!(filtered || value))
    },
  })

  const getColumnSearchableFilterProps = ({
    fieldName,
    options,
  }: GetColumnSearchableFilterProps): TableColumnType<DataType> => ({
    filterDropdown: (filterDropdownProps): React.ReactElement => (
      <ColumnSearchableFilterInput
        options={options}
        fieldName={fieldName}
        {...filterDropdownProps}
      />
    ),
    filterIcon: (filtered: boolean) => {
      const value = getSearchParamsValue(String(fieldName))
      return FilterIcon(!!(filtered || value))
    },
  })

  return {
    getColumnFilterProps,
    getColumnSearchableFilterProps,
  }
}

export type UseGetColumnFilterPropsType = ReturnType<
  typeof useGetColumnFilterProps
>

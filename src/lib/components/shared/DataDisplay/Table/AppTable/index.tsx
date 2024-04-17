import { Table } from 'antd'
import { TableProps } from 'antd/lib'
import { GetRowKey } from 'antd/lib/table/interface'
import { useMemo } from 'react'

import { useBreakpointValue } from '@/lib/hooks/shared/useBreakPointValue'
import { useTablePagination } from '@/lib/hooks/shared/useTablePagination'
import { mapTableMetaToAntdPagination } from '@/lib/utils/table/pagination'

type AppTableProps<TData> = {
  rowKey: keyof TData | GetRowKey<TData>
  total?: number
  tableMeta?: ReturnType<typeof useTablePagination>
} & Omit<TableProps<TData>, 'pagination'>

const AppTable = <TData extends object>({
  columns,
  total,
  dataSource,
  rowKey,
  tableMeta,
  ...tableProps
}: AppTableProps<TData>) => {
  const { isMobile } = useBreakpointValue()

  const scrollX = useMemo(
    () => (columns && columns.length < 6 ? 'auto' : 1200),
    [columns]
  )

  const updatedColumns = useMemo(
    () =>
      columns?.map((column) => {
        if (column.fixed && isMobile) {
          return { ...column, fixed: undefined }
        }
        return column
      }),
    [columns, isMobile]
  )
  return (
    <Table<TData>
      rowKey={rowKey}
      columns={updatedColumns}
      dataSource={dataSource}
      scroll={{ x: scrollX }}
      pagination={
        tableMeta && total
          ? mapTableMetaToAntdPagination({ tableMeta, total })
          : undefined
      }
      {...tableProps}
    />
  )
}

export default AppTable

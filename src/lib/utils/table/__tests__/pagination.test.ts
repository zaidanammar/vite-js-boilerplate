import debounce from 'lodash/debounce'

import { mapTableMetaToAntdPagination } from '@/lib/utils/table/pagination'

describe('mapTableMetaToAntdPagination', () => {
  const tableMeta = {
    limit: 10,
    current: 1,
    handleChangePage: jest.fn(),
    offset: 0,
    page: 1,
    handleUpdateFilter: debounce(jest.fn()),
  }
  test('maps tableMeta and total to TablePaginationConfig', () => {
    const total = 100

    const result = mapTableMetaToAntdPagination({
      tableMeta,
      total,
    })

    expect(result).toStrictEqual({
      total,
      showSizeChanger: true,
      pageSize: tableMeta.limit,
      hideOnSinglePage: false,
      current: tableMeta.current,
      onChange: tableMeta.handleChangePage,
      pageSizeOptions: [5, 10, 20, 50, 100],
    })
  })

  test('re-define pageSizeOptions with defaultPageSize', () => {
    const total = 100

    const result = mapTableMetaToAntdPagination({
      tableMeta,
      total,
      defaultPageSize: 3,
    })

    expect(result).toStrictEqual({
      total,
      showSizeChanger: true,
      pageSize: tableMeta.limit,
      hideOnSinglePage: false,
      current: tableMeta.current,
      onChange: tableMeta.handleChangePage,
      pageSizeOptions: [3, 5, 10, 20, 50, 100],
    })
  })
})

import { SearchOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { FilterDropdownProps } from 'antd/lib/table/interface'

type CTAColumnFilterProps = {
  fieldName: string
  handleReset: (
    clearFilters: () => void,
    confirm: FilterDropdownProps['confirm'],
    fieldName: string
  ) => void
  handleSearch: (
    selectedKeys: Array<string>,
    confirm: FilterDropdownProps['confirm'],
    fieldName: string
  ) => void
} & FilterDropdownProps

const CTAColumnFilter = ({
  clearFilters,
  confirm,
  fieldName,
  handleReset,
  handleSearch,
  selectedKeys,
}: CTAColumnFilterProps) => {
  return (
    <Flex gap={8}>
      <Button
        onClick={() =>
          clearFilters && handleReset(clearFilters, confirm, String(fieldName))
        }
        size="small"
        block
      >
        Reset
      </Button>
      <Button
        type="primary"
        onClick={() =>
          handleSearch(
            selectedKeys as Array<string>,
            confirm,
            String(fieldName)
          )
        }
        icon={<SearchOutlined />}
        size="small"
        block
      >
        Search
      </Button>
    </Flex>
  )
}

export default CTAColumnFilter

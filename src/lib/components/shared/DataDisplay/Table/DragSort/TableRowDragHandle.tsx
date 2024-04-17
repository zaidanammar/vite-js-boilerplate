import { MenuOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { SortableKnob } from 'react-easy-sort'

const TableRowDragHandle = () => {
  return (
    <SortableKnob>
      <Button type="text" size="small">
        <MenuOutlined />
      </Button>
    </SortableKnob>
  )
}

export default TableRowDragHandle

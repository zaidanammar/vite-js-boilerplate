import React from 'react'
import { SortableItem } from 'react-easy-sort'

type TableRowDraggableBodyProps = React.ComponentProps<typeof TableRowBody>

const TableRowDraggableBody = ({ ...props }: TableRowDraggableBodyProps) => {
  return (
    <SortableItem>
      <TableRowBody {...props} />
    </SortableItem>
  )
}

// eslint-disable-next-line react/display-name
const TableRowBody = React.forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  React.HTMLAttributes<HTMLTableRowElement>
>((props, ref) => <tr ref={ref} {...props} />)

export default TableRowDraggableBody

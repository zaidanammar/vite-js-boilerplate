import React from 'react'
import SortableList from 'react-easy-sort'

export type TableRowDraggableContainerProps = React.ComponentProps<
  typeof SortableList
>

const TableRowDraggableContainer = ({
  ...props
}: TableRowDraggableContainerProps) => {
  return <SortableList as="tbody" {...props} />
}

export default TableRowDraggableContainer

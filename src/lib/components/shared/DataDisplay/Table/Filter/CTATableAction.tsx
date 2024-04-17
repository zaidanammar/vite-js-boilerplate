import { Button, Flex } from 'antd'
import { FiRefreshCw } from 'react-icons/fi'

type CTATableActionProps = {
  onClearFilter?: () => void
  onRefresh?: () => void
}

const CTATableAction = ({ onRefresh }: CTATableActionProps) => {
  return (
    <Flex gap={12}>
      {/* <Button onClick={onClearFilter} icon={<FaFilterCircleXmark />}>
        Clear Filter
      </Button> */}
      <Button type="primary" onClick={onRefresh} icon={<FiRefreshCw />} />
    </Flex>
  )
}

export default CTATableAction

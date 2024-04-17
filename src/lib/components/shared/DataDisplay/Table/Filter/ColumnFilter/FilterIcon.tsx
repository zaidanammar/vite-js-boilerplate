import { Badge } from 'antd'
import { BiFilterAlt } from 'react-icons/bi'

import { infoColor } from '@/lib/constants/colors'

const FilterIcon = (filtered: boolean) => {
  return filtered ? (
    <Badge
      color="red"
      count=" "
      style={{
        minWidth: 8,
        height: 8,
      }}
    >
      <BiFilterAlt
        size={16}
        style={{
          color: infoColor['main'],
        }}
      />
    </Badge>
  ) : (
    <BiFilterAlt size={16} />
  )
}

export default FilterIcon

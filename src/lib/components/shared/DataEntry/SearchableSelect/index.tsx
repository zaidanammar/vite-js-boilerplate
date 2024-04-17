import { Select, SelectProps } from 'antd'
import React from 'react'

import { filterSelectOption } from './utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
const SearchableSelect = React.forwardRef<any, SelectProps>((props, ref) => (
  <Select
    ref={ref}
    showSearch
    allowClear
    filterOption={filterSelectOption}
    optionFilterProp="label"
    {...props}
  />
))

export default SearchableSelect

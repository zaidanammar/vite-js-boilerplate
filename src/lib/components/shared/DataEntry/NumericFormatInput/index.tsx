import { Input, type InputProps } from 'antd'
import React from 'react'
import {
  NumericFormat,
  type NumberFormatValues,
  type NumericFormatProps,
} from 'react-number-format'

type NumericFormatInputProps = {
  onChange?: (value: number | undefined) => void
} & NumericFormatProps &
  InputProps

const NumericFormatInput = ({
  onChange,
  ...props
}: NumericFormatInputProps) => {
  const handleValueChange = (values: NumberFormatValues) => {
    if (onChange) {
      onChange(values.floatValue)
    }
  }

  return (
    <NumericFormat
      customInput={Input as React.ComponentType}
      thousandSeparator
      onValueChange={handleValueChange}
      {...props}
    />
  )
}

export default NumericFormatInput

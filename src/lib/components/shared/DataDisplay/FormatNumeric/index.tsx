import React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

type FormatNumericProps = NumericFormatProps & {
  fallback?: React.ReactNode
  showZero?: boolean
}

const FormatNumeric = (props: FormatNumericProps) => {
  if (
    !props.value &&
    (props.showZero ? props.value == null : true) &&
    props.fallback
  ) {
    return props.fallback as React.JSX.Element
  }

  return (
    <NumericFormat
      thousandSeparator
      displayType="text"
      decimalScale={2}
      {...props}
    />
  )
}

export default FormatNumeric

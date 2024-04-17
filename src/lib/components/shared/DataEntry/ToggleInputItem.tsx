import InputItem, { InputItemProps } from './InputItem'

type ToggleInputItemProps = InputItemProps

const ToggleInputItem = ({ wrapperProps, ...props }: ToggleInputItemProps) => {
  return (
    <InputItem
      wrapperProps={{
        span: 12,
        md: 6,
        ...wrapperProps,
      }}
      {...props}
    />
  )
}

export default ToggleInputItem

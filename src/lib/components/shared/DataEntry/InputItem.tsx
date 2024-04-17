import { Form, FormItemProps } from 'antd'

import ResponsiveCol, {
  ResponsiveColProps,
} from '@/lib/components/shared/Layout/Grid/ResponsiveCol'

export type InputItemProps = FormItemProps &
  Pick<ResponsiveColProps, 'fullWidth'> & {
    wrapperProps?: Omit<ResponsiveColProps, 'fullWidth'>
  }

const InputItem = ({
  children,
  wrapperProps,
  fullWidth,
  ...props
}: InputItemProps) => {
  return (
    <ResponsiveCol fullWidth={fullWidth} {...wrapperProps}>
      <Form.Item {...props}>{children}</Form.Item>
    </ResponsiveCol>
  )
}

export default InputItem

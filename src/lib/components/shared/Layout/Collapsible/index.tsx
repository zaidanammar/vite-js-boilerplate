import { Collapse, CollapseProps, Divider, Typography } from 'antd'
import React, { ReactNode, FunctionComponent } from 'react'

type CollapsibleProps = CollapseProps & {
  title: ReactNode
  children: ReactNode
  defaultActiveKey?: string
}

const Collapsible: FunctionComponent<CollapsibleProps> = ({
  title,
  children,
  defaultActiveKey = '1',
  ...props
}) => {
  return (
    <Collapse
      ghost
      expandIconPosition="end"
      defaultActiveKey={defaultActiveKey}
      className="custom-collapse"
      {...props}
    >
      <Collapse.Panel
        key="1"
        header={
          <>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography.Title level={4}>{title}</Typography.Title>
            )}

            <Divider style={{ margin: 0 }} />
          </>
        }
      >
        {children}
      </Collapse.Panel>
    </Collapse>
  )
}

export default Collapsible

import { Col, Divider, Row, Select, Typography } from 'antd'

import CTATableAction from '@/lib/components/shared/DataDisplay/Table/Filter/CTATableAction'
import { DeliveryTransactionListViewModel } from '@/lib/hooks/delivery-transaction/useDeliveryTransactionListPage'
import { useViewModelContext } from '@/lib/providers/ViewModel'

const DeliveryTransactionFilter = () => {
  const {
    handleRefreshData,
    handleClearFilter,
    selectedColumns,
    setSelectedColumns,
    defaultDeliveryTransactionColumnOptions,
  } = useViewModelContext<DeliveryTransactionListViewModel>()

  return (
    <>
      <Row gutter={16} justify="space-between" align="middle">
        <Col>
          <Typography.Text>Show columns: </Typography.Text>
          <Select
            mode="multiple"
            maxTagCount={1}
            style={{ width: 250 }}
            value={selectedColumns}
            placeholder="Select columns to show"
            onChange={(value) => setSelectedColumns(value)}
            options={defaultDeliveryTransactionColumnOptions}
          />
        </Col>

        <CTATableAction
          onClearFilter={handleClearFilter}
          onRefresh={handleRefreshData}
        />
      </Row>
      <Divider style={{ margin: '16px 0 4px 0' }} />
    </>
  )
}

export default DeliveryTransactionFilter

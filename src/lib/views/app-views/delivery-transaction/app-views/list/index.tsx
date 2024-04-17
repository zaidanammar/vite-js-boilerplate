import { Space, Typography } from 'antd'

import PageLayout from '@/lib/components/shared/Layout/PageLayout'
import { deliveryTransactionMenuLabel } from '@/lib/constants/menuLabel'
import useDeliveryTransactionListPage from '@/lib/hooks/delivery-transaction/useDeliveryTransactionListPage'
import { ViewModelProvider } from '@/lib/providers/ViewModel'

import DeliveryTransactionFilter from './components/DeliveryTransactionFilter'
import DeliveryTransactionTable from './components/DeliveryTransactionTable'

const DeliveryTransactionListPage = () => {
  const viewModel = useDeliveryTransactionListPage()

  return (
    <ViewModelProvider {...viewModel}>
      <PageLayout
        header={
          <Typography.Title level={2}>
            {deliveryTransactionMenuLabel}
          </Typography.Title>
        }
        breadCrumbItems={[
          { title: 'Transaction' },
          {
            title: deliveryTransactionMenuLabel,
          },
        ]}
      >
        <Space direction="vertical" size="middle">
          <DeliveryTransactionFilter />
          <DeliveryTransactionTable />
        </Space>
      </PageLayout>
    </ViewModelProvider>
  )
}

export default DeliveryTransactionListPage

import AppTable from '@/lib/components/shared/DataDisplay/Table/AppTable'
import { DeliveryTransactionListViewModel } from '@/lib/hooks/delivery-transaction/useDeliveryTransactionListPage'
import { useViewModelContext } from '@/lib/providers/ViewModel'

import { DeliveryTransactionListTableColumns } from './deliveryTransactionTableColumns'

const DeliveryTransactionTable = () => {
  const {
    tableMeta,
    totalData,
    deliveryTransactionListData,
    isLoadingDeliveryTransactionListData,
  } = useViewModelContext<DeliveryTransactionListViewModel>()

  return (
    <AppTable
      rowKey="uuid"
      dataSource={deliveryTransactionListData}
      loading={isLoadingDeliveryTransactionListData}
      columns={DeliveryTransactionListTableColumns()}
      tableMeta={tableMeta}
      total={totalData}
    />
  )
}

export default DeliveryTransactionTable

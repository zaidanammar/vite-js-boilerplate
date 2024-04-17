import { WhatsAppOutlined } from '@ant-design/icons'
import { Button, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import startCase from 'lodash/startCase'
import { useMemo } from 'react'

import FormatNumeric from '@/lib/components/shared/DataDisplay/FormatNumeric'
import { useGetColumnFilterProps } from '@/lib/components/shared/DataDisplay/Table/Filter/ColumnFilter/getColumnFilterProps'
import { DATE_FORMAT_DD_MMM_YYYY_HH_mm_ss } from '@/lib/constants/date'
import { DeliveryTransactionListViewModel } from '@/lib/hooks/delivery-transaction/useDeliveryTransactionListPage'
import { useViewModelContext } from '@/lib/providers/ViewModel'
import {
  DeliveryTransactionEntry,
  TransactionStatus,
} from '@/lib/services/api/transaction-services/delivery-transaction/getList/types'
import { dateFormatter } from '@/lib/utils/date/dateFormatter'
import { contactWhatsapp } from '@/lib/utils/string/contactWhatsapp'
import { transactionStatusColorMap } from '@/lib/views/app-views/delivery-transaction/app-views/list/constants'

export const DefaultDeliveryTransactionColumns =
  (): ColumnsType<DeliveryTransactionEntry> => {
    const { getColumnFilterProps } =
      useGetColumnFilterProps<DeliveryTransactionEntry>()

    return [
      {
        title: 'No.',
        width: 60,
        key: 'index',
        dataIndex: 'index',
      },
      {
        title: 'Restaurant name',
        width: 150,
        dataIndex: ['outlet', 'restaurant_name'],
        key: 'restaurant_name',
      },
      {
        title: 'Outlet name',
        width: 150,
        dataIndex: ['outlet', 'restaurant_outlet_name'],
        key: 'outlet_name',
      },
      {
        title: 'Outlet phone number',
        width: 200,
        dataIndex: ['outlet', 'outlet_phone'],
        key: 'outlet_phone_number',
        render: (value) =>
          value && (
            <>
              {value}{' '}
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    contactWhatsapp({
                      phoneNumber: value,
                    }),
                    '_blank'
                  )
                }
                type="primary"
                icon={<WhatsAppOutlined size={16} />}
              />
            </>
          ),
      },
      {
        title: 'Transaction status',
        dataIndex: ['transaction', 'status'],
        width: 200,
        key: 'transaction_status',
        render: (value) => (
          <Tag color={transactionStatusColorMap[value as TransactionStatus]}>
            {startCase(value.toLowerCase())}
          </Tag>
        ),
      },
      {
        title: 'Transaction category',
        dataIndex: ['transaction', 'category'],
        key: 'transaction_category',
        width: 200,
      },
      {
        title: 'Courier',
        dataIndex: ['courier', 'name'],
        key: 'courier',
        width: 220,
      },
      {
        title: 'Courier name',
        dataIndex: ['courier', 'driver', 'name'],
        key: 'courier_name',
        width: 220,
      },
      {
        title: 'Courier phone number',
        dataIndex: ['courier', 'driver', 'phone'],
        key: 'courier_phone_number',
        width: 220,
        render: (value) =>
          value && (
            <>
              {value}{' '}
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    contactWhatsapp({
                      phoneNumber: value,
                    }),
                    '_blank'
                  )
                }
                type="primary"
                icon={<WhatsAppOutlined size={16} />}
              />
            </>
          ),
        ...getColumnFilterProps({
          fieldName: 'courier_phone_number',
          fieldType: 'text',
        }),
      },
      {
        title: 'Invoice number',
        dataIndex: ['transaction', 'booking_code'],
        key: 'invoice_number',
        width: 220,
        ...getColumnFilterProps({
          fieldName: 'booking_code',
          fieldType: 'text',
        }),
      },
      {
        title: 'Payment method',
        dataIndex: ['payment', 'channel_name'],
        key: 'payment_method',
        width: 150,
      },
      {
        title: 'Transaction date',
        dataIndex: ['transaction', 'created_at'],
        key: 'transaction_date',
        render: (value) =>
          dateFormatter({
            date: value,
            format: DATE_FORMAT_DD_MMM_YYYY_HH_mm_ss,
          }),
        width: 190,
        ...getColumnFilterProps({
          fieldName: 'transaction_created_at',
          fieldType: 'date',
        }),
      },
      {
        title: 'Order time',
        dataIndex: ['courier', 'order_at'],
        key: 'order_time',
        render: (value) =>
          dateFormatter({
            date: value,
            format: DATE_FORMAT_DD_MMM_YYYY_HH_mm_ss,
          }),
        width: 190,
        ...getColumnFilterProps({
          fieldName: 'order_created_at',
          fieldType: 'date',
        }),
      },
      {
        title: 'Customer name',
        dataIndex: ['destination', 'contact_name'],
        key: 'customer_name',
        width: 220,
        ...getColumnFilterProps({
          fieldName: 'customer_name',
          fieldType: 'text',
        }),
      },
      {
        title: 'Customer phone number',
        dataIndex: ['destination', 'contact_phone'],
        key: 'customer_phone_number',
        width: 220,
        ...getColumnFilterProps({
          fieldName: 'customer_phone_number',
          fieldType: 'text',
        }),
      },
      {
        title: 'Delivery address',
        dataIndex: ['destination', 'address'],
        key: 'delivery_address',
        width: 220,
      },
      {
        title: 'Delivery note',
        dataIndex: ['transaction', 'note'],
        key: 'delivery_note',
        width: 220,
      },
      {
        title: 'Transaction amount',
        dataIndex: ['payment', 'transaction_amount'],
        key: 'transaction_amount',
        width: 180,
        render: (value) => <FormatNumeric value={value} fallback="-" />,
      },
      {
        title: 'Delivery fee',
        dataIndex: ['payment', 'delivery_fee'],
        key: 'delivery_fee',
        width: 180,
        render: (value) => <FormatNumeric value={value} fallback="-" />,
      },
      {
        title: 'Delivery discount',
        dataIndex: ['payment', 'delivery_discount'],
        key: 'delivery_discount',
        width: 180,
        render: (value) => <FormatNumeric value={value} fallback="-" />,
      },
      {
        title: 'Total amount',
        dataIndex: ['payment', 'final_amount'],
        key: 'total',
        width: 180,
        render: (value) => <FormatNumeric value={value} fallback="-" />,
      },
      {
        title: 'Action',
        width: 125,
        key: 'action',
        fixed: 'right',
        render: (_) => <Button type="link">View details</Button>,
      },
    ]
  }

export const DeliveryTransactionListTableColumns =
  (): ColumnsType<DeliveryTransactionEntry> => {
    const { selectedColumns } =
      useViewModelContext<DeliveryTransactionListViewModel>()

    const filteredColumns = useMemo(
      () => selectedColumns.map((column) => column.value || column),
      [selectedColumns]
    )

    return DefaultDeliveryTransactionColumns().filter((column) =>
      filteredColumns.includes(column.key as string)
    )
  }

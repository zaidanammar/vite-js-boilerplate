// import { useGetAllBank } from '@/lib/services/api/master-services/bank/getAll';

export const useGetBankOptions = () => {
  // const { response: bankListResponse } = useGetAllBank();

  // const bankOptions = React.useMemo(
  //   () =>
  //     (bankListResponse ?? []).map((item) => ({
  //       label: item.bank_name,
  //       value: item.bank_id,
  //     })),
  //   [bankListResponse]
  // );

  const bankOptions = [
    {
      label: '',
      value: '',
    },
  ]

  return {
    bankOptions,
  }
}

import { useGetAPI } from '@/lib/services/api/hooks'

import {
  GetAccessMenuDetailResponseData,
  UseGetAccessMenuDetailParams,
} from './types'

const GET_DEFAULT_PATH = '/access-menu/default'
const GET_DETAIL_PATH = '/access-menu/by-user-type'

const getAccessMenuQueryKey = 'getAccessMenuDetail'

export const useGetAccessMenuDetail = ({
  userTypeID,
}: UseGetAccessMenuDetailParams) =>
  useGetAPI<GetAccessMenuDetailResponseData>({
    queryKey: getAccessMenuQueryKey,
    path: userTypeID?.length
      ? `${GET_DETAIL_PATH}/${userTypeID}`
      : GET_DEFAULT_PATH,
  })

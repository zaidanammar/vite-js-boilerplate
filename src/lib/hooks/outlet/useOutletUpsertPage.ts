import { Form, message } from 'antd'
import { useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getAllDefaultLimit } from '@/lib/constants/pagination'
import { useGetFoodCategoryList } from '@/lib/services/api/food-category-services/getList'
import { useGetOutletDetail } from '@/lib/services/api/outlet-services/getDetail'
import { useUpdateOutlet } from '@/lib/services/api/outlet-services/update'
import { UpdateOutletRequest } from '@/lib/services/api/outlet-services/update/types'

const useOutletUpsertPage = () => {
  const { outletID } = useParams()
  const navigate = useNavigate()
  const [form] = Form.useForm<UpdateOutletRequest>()

  const pageTitle = outletID ? 'Edit Outlet' : 'Add Outlet'

  const goBack = () => navigate(-1)

  const { data: foodCategoryData, isPending: isLoadingFoodCategory } =
    useGetFoodCategoryList({
      queryParams: {
        limit: getAllDefaultLimit,
      },
    })

  const { data: OutletData, isPending: isLoadingOutletData } =
    useGetOutletDetail({
      outletID,
    })

  const { mutate: submitUpsert, isPending: isLoadingSubmitUpsert } =
    useUpdateOutlet(outletID || '', {
      onSuccess: () => {
        message.success('Outlet updated successfully')
        goBack()
      },
    })

  const foodCategoryOptions = useMemo(() => {
    return (foodCategoryData?.objs ?? []).map((item) => ({
      label: item.name,
      value: item.uuid,
    }))
  }, [foodCategoryData])

  const handleInitializeForm = useCallback(() => {
    if (!OutletData) return
    form.setFieldsValue({
      is_show: OutletData.is_show,
      delivery: {
        status: OutletData.delivery?.status,
      },
      food_category_uuids: OutletData.food_category?.map((item) => item.uuid),
    })
  }, [OutletData, form])

  useEffect(() => {
    handleInitializeForm()
  }, [handleInitializeForm])

  return {
    form,
    goBack,
    pageTitle,
    OutletData,
    submitUpsert,
    isLoadingSubmitUpsert,
    foodCategoryOptions,
    isLoadingFoodCategory,
    isLoadingOutletData,
  }
}

export default useOutletUpsertPage

export type OutletUpsertViewModel = ReturnType<typeof useOutletUpsertPage>

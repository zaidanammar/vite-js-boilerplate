import { Form, message } from 'antd'
import { RcFile } from 'antd/es/upload'
import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { onUploadFileDocument } from '@/lib/services/api/document-services/uploadFile'
import { useCreateFoodCategory } from '@/lib/services/api/food-category-services/create'
import { useGetFoodCategoryDetail } from '@/lib/services/api/food-category-services/getDetail'
import { useUpdateFoodCategory } from '@/lib/services/api/food-category-services/update'

import { UpsertFoodCategoryFormType } from './types'

const useFoodCategoryUpsertPage = () => {
  const { foodCategoryID } = useParams()
  const navigate = useNavigate()
  const [form] = Form.useForm<UpsertFoodCategoryFormType>()

  const image = Form.useWatch('image', form)

  const formKey = 'foodCategoryUpsertForm'

  const pageTitle = foodCategoryID
    ? 'Edit Food Category'
    : 'Create Food Category'

  const goBack = () => {
    form.resetFields()
    navigate(-1)
  }

  const { data: foodCategoryData, isFetching: isLoadingFoodCategoryData } =
    useGetFoodCategoryDetail({
      foodCategoryID: foodCategoryID || '',
      options: {
        enabled: !!foodCategoryID,
      },
    })

  const { mutate: submitCreate, isPending: isLoadingSubmitCreate } =
    useCreateFoodCategory({
      onSuccess: () => {
        message.success('Food category created successfully')
        goBack()
      },
    })

  const { mutate: submitUpdate, isPending: isLoadingSubmitUpdate } =
    useUpdateFoodCategory(foodCategoryID || '', {
      onSuccess: () => {
        message.success('Food category updated successfully')
        goBack()
      },
    })

  const isLoadingSubmitUpsert = isLoadingSubmitCreate || isLoadingSubmitUpdate

  const handleSubmitUpsert = async (values: UpsertFoodCategoryFormType) => {
    let documentData
    if (!values.image.url) {
      const uploadFileData = await onUploadFileDocument({
        image_file: values.image as RcFile,
        image_filename_prefix: 'food_category',
      })

      documentData = uploadFileData
    }

    const payload = {
      name: values.name,
      is_show: values.is_show,
      image_url: documentData?.url || values?.image?.url || '',
    }

    if (foodCategoryID) {
      submitUpdate({
        ...payload,
        foodCategoryID,
      })
      return
    }
    submitCreate({
      ...payload,
    })
  }

  const handleInitializeForm = useCallback(() => {
    if (foodCategoryData && foodCategoryID) {
      form.setFieldsValue({
        is_show: foodCategoryData.is_show,
        name: foodCategoryData.name,
        image: foodCategoryData.image_url
          ? { url: foodCategoryData.image_url }
          : undefined,
      })
    }
  }, [foodCategoryData, foodCategoryID, form])

  useEffect(() => {
    handleInitializeForm()
  }, [handleInitializeForm])

  return {
    form,
    image,
    goBack,
    formKey,
    pageTitle,
    foodCategoryData,
    handleSubmitUpsert,
    isLoadingSubmitUpsert,
    isLoadingFoodCategoryData,
  }
}

export default useFoodCategoryUpsertPage

export type FoodCategoryUpsertViewModel = ReturnType<
  typeof useFoodCategoryUpsertPage
>

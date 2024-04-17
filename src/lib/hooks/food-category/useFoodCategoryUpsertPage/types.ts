import { UploadInputValue } from '@/lib/models/form/upload'

export type UpsertFoodCategoryFormType = {
  name: string
  image: UploadInputValue
  is_show: boolean
}

import { FormInstance } from 'antd'
import { NamePath } from 'antd/lib/form/interface'
import { arrayMoveImmutable } from 'array-move'

// import { ApprovalHierarchy } from '@/lib/services/api/product-services/types';

type HandleDragSortEndParams = {
  form: FormInstance
  name: NamePath
  indexKey?: string
  indexStartFrom?: number
}

export const handleDragSortEnd =
  ({ form, name, indexKey, indexStartFrom = 0 }: HandleDragSortEndParams) =>
  (prevIndex: number, newIndex: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataSource: Array<any> = form.getFieldValue(name)

    const sortedValue = arrayMoveImmutable(dataSource, prevIndex, newIndex)
    const updatedValues = sortedValue.map((items, index) => ({
      ...items,
      ...(indexKey ? { [indexKey]: index + indexStartFrom } : {}),
    }))

    form.setFieldValue(name, updatedValues)
  }

// export const adjustLevelApprovals = (configArray: Array<ApprovalHierarchy>) => {
//   return configArray.forEach((config, index: number) => {
//     config.level_approval = index + 1;
//   });
// };

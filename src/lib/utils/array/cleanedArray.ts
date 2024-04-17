// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanedArray = (data: Array<any>) =>
  data.filter((value) => {
    if (typeof value === 'object' && 'value' in value) {
      return value.value !== ''
    }
    return true
  })

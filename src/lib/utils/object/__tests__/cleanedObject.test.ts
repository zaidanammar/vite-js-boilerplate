import { cleanedObject } from '@/lib/utils/object/cleanedObject'

describe('cleanedObject', () => {
  test('should strip empty and false values', () => {
    const result = cleanedObject({
      hi: false,
      hello: true,
      full_name: '',
      phone: undefined,
      identity_number: null,
    })
    expect(result).toStrictEqual({ hello: true })
  })

  test('should keep 0 value', () => {
    const result = cleanedObject({
      hi: false,
      hello: 0,
      full_name: 'name',
      phone: undefined,
      identity_number: null,
    })
    expect(result).toStrictEqual({ hello: 0, full_name: 'name' })
  })
})

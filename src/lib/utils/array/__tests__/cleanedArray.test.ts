import { cleanedArray } from '@/lib/utils/array/cleanedArray'

describe('cleanedArray', () => {
  test('removes objects with empty string values', () => {
    const inputArray = [
      { field: 'restaurant_name', value: 'Pizza Hut' },
      { field: 'restaurant_name', value: '' },
      { field: 'cuisine', value: 'Italian' },
      { field: 'cuisine', value: 'Mexican' },
    ]

    const result = cleanedArray(inputArray)

    expect(result).toHaveLength(3)
    expect(result).toContainEqual({
      field: 'restaurant_name',
      value: 'Pizza Hut',
    })
    expect(result).toContainEqual({ field: 'cuisine', value: 'Italian' })
    expect(result).toContainEqual({ field: 'cuisine', value: 'Mexican' })
    expect(result).not.toContainEqual({ field: 'restaurant_name', value: '' })
  })

  test('handles arrays with non-object elements', () => {
    const inputArray = ['Pizza Hut', '', 'Italian', 'Mexican']

    const result = cleanedArray(inputArray)

    expect(result).toHaveLength(4)
    expect(result).toContain('Pizza Hut')
    expect(result).toContain('')
    expect(result).toContain('Italian')
    expect(result).toContain('Mexican')
  })
})

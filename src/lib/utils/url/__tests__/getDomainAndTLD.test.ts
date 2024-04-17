import { getDomainAndTLD } from '@/lib/utils/url/getDomainAndTLD'

describe('getDomainAndTLD', () => {
  test('should extract the domain and TLD from a URL', () => {
    const url = 'https://www.example.com/path/to/page'
    const result = getDomainAndTLD(url)

    expect(result).toBe('example.com')
  })

  test('should handle URLs without "www"', () => {
    const url = 'https://example.org'
    const result = getDomainAndTLD(url)

    expect(result).toBe('example.org')
  })

  test('should handle URLs without paths', () => {
    const url = 'https://sub.example.io'
    const result = getDomainAndTLD(url)

    expect(result).toBe('example.io')
  })

  test('should handle invalid URLs', () => {
    const url = 'not-a-valid-url'
    const result = getDomainAndTLD(url)

    expect(result).toBe('')
  })
})

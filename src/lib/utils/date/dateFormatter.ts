import dayjs, { Dayjs } from 'dayjs'

import { DATE_FORMAT_YYYY_MM_DD } from '@/lib/constants/date'

type DateFormatParams = {
  date: string | number | Dayjs | Date | null | undefined
  format?: string
  fallback?: string
}

function dateFormatter({
  date,
  format,
  fallback,
}: DateFormatParams & { fallback: string }): string

function dateFormatter({ date, format }: DateFormatParams): string | undefined

function dateFormatter({ date, format, fallback }: DateFormatParams) {
  if (!date) {
    return fallback
  }
  return dayjs(date).format(format || DATE_FORMAT_YYYY_MM_DD)
}

export { dateFormatter }

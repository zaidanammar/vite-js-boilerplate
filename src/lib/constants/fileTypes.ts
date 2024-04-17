export const imageOnlyFileTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
] as const
export const pdfOnlyFileTypes = ['application/pdf'] as const
export const imageFileTypes = [...imageOnlyFileTypes, ...pdfOnlyFileTypes]
export const excelFileTypes = [
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
]

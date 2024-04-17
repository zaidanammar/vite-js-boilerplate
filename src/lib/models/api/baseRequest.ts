export type SortingType = 'desc' | 'asc'

export type Sort<TField = unknown> = {
  field: TField
  value: SortingType
}

export type Search<TField = unknown> = {
  field: TField
  value: string
}

export type QueryParamsRequest<TSearch = unknown, TSort = unknown> = {
  search?: Array<Search<TSearch>>
  sort?: Sort<TSort>
  limit?: number
  page?: number
}

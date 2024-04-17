export type District = {
  district_id: string
  district: string
}

export type GetAllDistrictResponseData = Array<District>

export type DistrictRequest = {
  limit?: number
  offset?: number
  province: string
  city: string
}

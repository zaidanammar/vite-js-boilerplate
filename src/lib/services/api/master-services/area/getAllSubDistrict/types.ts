export type SubDistrict = {
  sub_district_id: string
  sub_district: string
  post_code: number
}

export type GetAllSubDistrictResponseData = Array<SubDistrict>

export type SubDistrictRequest = {
  limit?: number
  offset?: number
  province: string
  district: string
  city: string
}

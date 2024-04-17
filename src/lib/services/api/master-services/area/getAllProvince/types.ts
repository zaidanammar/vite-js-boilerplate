export type Province = {
  province_id: string
  province: string
}

export type GetAllProvinceResponseData = Array<Province>

export type ProvinceRequest = {
  limit?: number
  offset?: number
}

export type City = {
  city_id: string
  city: string
}

export type GetAllCityResponseData = Array<City>

export type CityRequest = {
  limit?: number
  offset?: number
  province: string
}

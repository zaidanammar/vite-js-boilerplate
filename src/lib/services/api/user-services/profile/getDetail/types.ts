export type GetProfileDetailResponseData = {
  user_uuid: string
  full_name: string
  email: string
  phone: string
  role: RoleInfo
}

type RoleInfo = {
  uuid: string
  name: string
  description: string
}

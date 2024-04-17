export type SubmitLoginRequest = {
  email: string
  password: string
}

export type SubmitLoginResponseData = {
  token: string
  user_info: UserInfo
  is_finish_onboarding: boolean
  refresh_token: string
  expired_at: ExpiredAt
  role_access: RoleAccess
  product_tour: unknown
}

export type UserInfo = {
  user_uuid: string
  fullname: string
  email: string
  phone: string
}

type ExpiredAt = {
  seconds: number
  nanos: number
}

type RoleAccess = {
  role: Role
  accesses: Array<Access>
}

type Role = {
  uuid: string
  name: string
  is_internal: boolean
  accesses: Array<Access>
}

type Access = {
  uuid: string
  name: string
  key: string
  description: string
  is_internal: boolean
}

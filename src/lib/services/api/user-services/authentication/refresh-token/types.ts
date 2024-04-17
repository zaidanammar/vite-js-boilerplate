export type SubmitRefreshTokenRequest = {
  user_uuid: string
  token: string
  refresh_token: string
}

export type SubmitRefreshTokenResponseData = {
  uuid: string
  token: string
  refresh_token: string
  expired_at: {
    seconds: number
    nanos: number
  }
}

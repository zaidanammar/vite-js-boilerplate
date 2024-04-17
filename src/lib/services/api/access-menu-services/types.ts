const accessMenuKeys = [
  //TODO: update access menu keys
  'DASHBOARD',
] as const

export type AccessMenuKey = (typeof accessMenuKeys)[number]
export type PartialAccessMenuMap = {
  [Key in AccessMenuKey]?: boolean
}

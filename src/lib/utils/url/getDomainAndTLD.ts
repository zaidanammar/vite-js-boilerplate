const isValidURL = (str: string) => {
  try {
    new URL(str)
    return true
  } catch (error) {
    return false
  }
}

export const getDomainAndTLD = (url: string) => {
  if (!isValidURL(url)) {
    return ''
  }

  const parsedUrl = new URL(url)
  const splitHostname = parsedUrl.hostname.split('.')
  const domain = splitHostname[splitHostname.length - 2]
  const TLD = splitHostname[splitHostname.length - 1]

  return `${domain}.${TLD}`
}

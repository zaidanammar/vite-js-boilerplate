export const WHATSAPP_URL = 'https://api.whatsapp.com/send'

export const subsPhoneNumber = (phoneNumber: string) => {
  // Remove leading '0' from the phone number
  if (phoneNumber.startsWith('0')) {
    return phoneNumber.substring(1)
  }

  // Remove '62' country code prefix, if present
  if (phoneNumber.startsWith('62')) {
    return phoneNumber.substring(2)
  }

  // If no prefix matches, return the original phone number
  return phoneNumber
}

export const contactWhatsapp = ({ phoneNumber }: { phoneNumber: string }) => {
  const phoneNumberWithoutPrefix = subsPhoneNumber(phoneNumber)
  const phoneNumberWithPrefix = `62${phoneNumberWithoutPrefix}`

  return `${WHATSAPP_URL}?phone=${phoneNumberWithPrefix}`
}

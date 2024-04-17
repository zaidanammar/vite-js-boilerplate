export const authPrefixPath = '/auth'
export const subscriptionPrexixPath = '/subscription'
export const userPrexixPath = '/user'
export const transactionPrexixPath = '/transaction'

export const loginPath = `${authPrefixPath}/login`

export const authRoutes = [loginPath]

export const subscriptionHistoryPath = `${subscriptionPrexixPath}/subscription-history`
export const subscriptionPlanPath = `${subscriptionPrexixPath}/subscription-plan`

export const outletPath = `${userPrexixPath}/outlet`
export const foodCategoryPath = `${userPrexixPath}/food-category`
export const deliveryTransactionPath = `${transactionPrexixPath}/delivery-transaction`

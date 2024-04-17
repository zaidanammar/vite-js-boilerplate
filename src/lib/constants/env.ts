export const isDevMode = import.meta.env.MODE === 'development'
export const isProductionMode = import.meta.env.MODE === 'production'

export const deployContext = import.meta.env.VITE_DEPLOY_CONTEXT

export const isDevEnvironment =
  ['local', 'development'].includes(deployContext) || isDevMode
export const isProductionContext = deployContext === 'production'
export const isProduction = isProductionMode && isProductionContext

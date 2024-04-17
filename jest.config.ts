import type { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverageFrom: ['src/**/utils/**/**.{ts,tsx,js,jsx}'],
  maxWorkers: 2,
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? '', {
    prefix: '<rootDir>/',
  }),
  transform: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
}

export default config

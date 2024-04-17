/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [
    'import',
    'lodash',
    'no-relative-import-paths',
    'jest',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '@',
      },
    ],
    complexity: 'warn',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'max-params': [
      'error',
      {
        max: 3,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'lodash/import-scope': ['error', 'method'],
  },
  overrides: [
    {
      files: [
        '**/constants/**/*',
        '**/services/**/*',
        '**/types/**/*',
        '**/utils/**/*',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-todo': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-mock-promise-shorthand': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it',
            withinDescribe: 'test',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
  ],
}

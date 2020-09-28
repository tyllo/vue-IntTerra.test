module.exports = {
  root: true,
  env: {
    browser: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'src/FieldService.ts',
    'src/models/*',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'eslint:recommended',
    '@vue/airbnb',
    './eslintrc/eslint-config-app-vue',
    './eslintrc/eslint-config-app-import',
    './eslintrc/eslint-config-app-typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,

    'no-multiple-empty-lines': ['error', {
      max: 2,
    }],
    camelcase: 'off',
    semi: ['error', 'never'],
    'no-void': 0,
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': [
        'state',
        'acc',
        'e',
      ],
    }],
  },
}

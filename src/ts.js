'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json' // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
  },
  extends: [
    './js.js',
    'love'
  ],
  plugins: [
    'etc'
  ],
  overrides: [
    {
      "files": ["*.test.ts", "*.spec.ts"],
      "rules": {
        "@typescript-eslint/no-unused-expressions": "off"
      }
    }
  ],
  rules: {
    'no-use-before-define': 'off', // Types often are recursive & no use before define is too restrictive
    'etc/prefer-interface': 'off', // TODO use this? https://ncjamieson.com/prefer-interfaces/
    '@typescript-eslint/prefer-function-type': 'off', // conflicts with 'etc/prefer-interface'
    '@typescript-eslint/explicit-function-return-type': 'off', // functions does not require return types
    '@typescript-eslint/no-this-alias': 'off', // allow 'const self = this'
    '@typescript-eslint/await-thenable': 'error', // disallows awaiting a value that is not a "Thenable"
    '@typescript-eslint/restrict-template-expressions': 'off', // allow values with `any` type in template literals
    '@typescript-eslint/method-signature-style': 'off', // allow method signature style
    'no-unused-vars': 'off', // disable this rule to use @typescript-eslint/no-unused-vars instead
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-unused-vars': 'error', // disallow unused variables
    'no-return-await': 'off', // disable this rule to use @typescript-eslint/return-await instead
    '@typescript-eslint/return-await': ['error', 'in-try-catch'], // require awaiting thenables returned from try/catch
    'jsdoc/require-param': 'off', // do not require jsdoc for params
    'jsdoc/require-param-type': 'off', // allow compiler to derive param type
    'no-undef': 'off', // typescript already checks for undefined variables so this is redundant - https://typescript-eslint.io/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    // indents as tabs
    '@typescript-eslint/quotes': 'off',
    'no-tabs': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    "@typescript-eslint/strict-boolean-expressions": 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/indent': 'off', // will not work with prettier
    "@typescript-eslint/dot-notation": 'off',
    "@typescript-eslint/promise-function-async": 'off',
    "@typescript-eslint/consistent-type-definitions": 'off',

  }
}

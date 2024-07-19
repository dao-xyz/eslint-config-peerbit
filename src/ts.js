'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json' // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
  },
  extends: [
    './js.js',
    'love',
    'prettier'
  ],
  plugins: [
    'etc'
  ],
  overrides: [
    {
      "files": ["*.test.ts", "*.spec.ts", "tests.ts"],
      "rules": {
        "@typescript-eslint/no-unused-expressions": "off"
      }
    },
    {
      "files": ["**/test/**","**/tests/**", "**/benchmark/**"],
      "rules": {
        "no-console": "off"
      }
    }
  ],
  rules: {
    'no-use-before-define': 'off', // Types often are recursive & no use before define is too restrictive
    'etc/prefer-interface': 'off', // TODO use this? https://ncjamieson.com/prefer-interfaces/
    '@typescript-eslint/prefer-function-type': 'off', // conflicts with 'etc/prefer-interface'
    '@typescript-eslint/explicit-function-return-type': 'off', // functions does not require return types
    '@typescript-eslint/no-this-alias': 'off', // allow 'const self = this'
    '@typescript-eslint/await-thenable': 'off', // TODO use this? disallows awaiting a value that is not a "Thenable"
    '@typescript-eslint/restrict-template-expressions': 'off', // allow values with `any` type in template literals
    '@typescript-eslint/method-signature-style': 'off', // allow method signature style
    'no-unused-vars': 'off', // disable this rule to use @typescript-eslint/no-unused-vars instead
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // TODO use this? disallow unused variables
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
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'prefer-const': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'no-nested-ternary': 'off',
    'complexity': 'off',
    'no-new': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'generator-star-spacing': 'off',
    'max-nested-callbacks': 'off',
    'one-var': 'off',
    'typescript-eslint/naming-convention': 'off',
    'valid-typeof': 'off',
    'array-callback-return': 'off',
    'no-unneeded-ternary': 'off',
    'no-multiple-empty-lines': 'off',
    'spaced-comment': 'off',
    "no-undef-init": 'off',
    '@typescript-eslint/unbound-method': 'off',
    'no-loop-func': 'off',
    'no-sequences': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
    '@typescript-eslint/brace-style': 'off',
    'no-labels': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    'import/no-named-default': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'camelcase': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    'curly': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'object-shorthand': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    'new-parens': 'off',
    'new-cap': 'off',
    'semi': 'off',
    'no-useless-return': 'off',
  }
}

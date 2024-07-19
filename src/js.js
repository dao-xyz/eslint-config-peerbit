'use strict'

module.exports = {
  extends: [
    'standard',
    'prettier'
  ],
  parserOptions: {
    sourceType: 'script'
  },
  env: {
    es2020: true,
    browser: true,
    node: true
  },
  plugins: [
    'no-only-tests',
    'jsdoc',
    'import',
  ],
  overrides: [
    {
      "files": ["*.test.js", "*.spec.js", "tests.js"],
      "rules": {
        "no-unused-expressions": "off"
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
    strict: ['error', 'safe'],
    'block-scoped-var': 'error',
    complexity: 'warn',
    'default-case': 'error',
    'guard-for-in': 'warn',
    'linebreak-style': ['warn', 'unix'],
    'no-alert': 'error',
    'no-console': 'error',
    'no-div-regex': 'error',
    'no-empty': 'warn',
    /*  'no-extra-semi': 'error', */
    'no-implicit-coercion': 'off',
    'no-nested-ternary': 'warn',
    'no-script-url': 'error',
    'no-warning-comments': 'off',
    'max-nested-callbacks': ['error', 6],
    'max-depth': ['error', 8],
    'require-yield': 'error',
    // plugins
    'no-only-tests/no-only-tests': 'error',
    'jsdoc/check-alignment': 'off',
    'jsdoc/tag-lines': 'off',
    'jsdoc/check-examples': 'off',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': ['error', { definedTags: ['internal', 'packageDocumentation'] }],
    'jsdoc/check-types': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': 'off',
    'jsdoc/no-types': 'off',
    // Note: no-undefined-types rule causes to many false positives:
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/559
    // And it is also unaware of many built in types
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/280
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    // Note: Do not require @returns because TS often can infer return types and
    // in many such cases it's not worth it.
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'off',
    // Note: At the moment type parser used by eslint-plugin-jsdoc does not
    // parse various forms correctly. For now warn on invalid type froms,
    // should revisit once following issue is fixed:
    // https://github.com/jsdoctypeparser/jsdoctypeparser/issues/50
    'jsdoc/valid-types': 'off',
    'import/order': 'off', // sort imports does not work with the prettier ordering plugin
    "indent": [2, "tab"],
    "no-tabs": 0, 
    'no-unmodified-loop-condition': 'off',
    'promise/param-names': 'off',
    'object-curly-spacing': 'off', // allow { } with space inside
    'prefer-const': 'off',
    'no-multiple-empty-lines': 'off',
    'spaced-comment': 'off',
    "no-undef-init": 'off',
    'no-loop-func': 'off',
    'no-sequences': 'off',
    'no-labels': 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'no-trailing-spaces': 'off',
    'import/no-named-default': 'off',
    'no-useless-return': 'off',
    'camelcase': 'off',
    'curly': 'off',
    'object-shorthand': 'off',
   'new-parens': 'off',
   'new-cap': 'off',
   'semi': 'off',
    
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        augments: {
          message: '@extends is to be used over @augments as it is more evocative of classes than @augments',
          replacement: 'extends'
        }
      },
      structuredTags: {
        extends: {
          type: true
        }
      }
    }
  }
}
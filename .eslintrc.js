module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true
      }
    ],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none'
      }
    ]
  },
  globals: {
    __PATH_PREFIX__: true,
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    graphql: true,
    fetch: 'readonly'
  },
  parser: '@babel/eslint-parser'
};

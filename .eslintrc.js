module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'func-names': ['error', 'never'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    camelcase: ['error', { properties: 'never' }],
    'no-param-reassign': ['error', { props: false }]
  }
};

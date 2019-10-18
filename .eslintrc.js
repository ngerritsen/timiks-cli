module.exports = {
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'prettier'
  ],
  env: {
    node: true
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: '2018'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ]
  }
};

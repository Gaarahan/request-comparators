module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    'max-len': ['error', { code: 140 }]
  },
  globals: {
    chrome: 'readonly',
    JsonView: 'readonly'
  }
};

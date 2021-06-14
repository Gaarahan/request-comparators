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
    'max-len': ['error', { code: 140 }],
    'space-before-function-paren': 'off'
  },
  globals: {
    chrome: 'readonly',
    JsonView: 'readonly'
  }
};

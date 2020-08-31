module.exports = {
  env: {
    node: true,
  },
  extends: [require.resolve('./base.js')],
  rules: {
    // allow console.log to notify users about errors
    'no-console': 'off',
    // allow `require` imports
    '@typescript-eslint/no-var-requires': 'off',
  },
};

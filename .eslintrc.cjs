module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "properties": "always",
    "consistent-return": "warn",
    "eqeqeq": "error",
    "max-nested-callbacks": "warn",
    "no-console": "warn",
    "no-empty": "warn",
    "no-nested-ternary": "warn",
    "yoda": "warn",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

  },
}
// .eslintrc.js
// Eke Delight
// 301325470
// Date: 03/03/2024

module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    plugins: [
      'react',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  
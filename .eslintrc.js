module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': ['off'],
      },
    },
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};

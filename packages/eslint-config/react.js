module.exports = {
  extends: [
    './base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
  rules: {
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'react-native-paper',
            importNames: ['useTheme'],
            message: 'Use `useAppTheme` from `@kuzpot/react-native` instead.',
          },
        ],
      },
    ],
  },
};

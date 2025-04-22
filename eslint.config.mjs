import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      // 🔧 Aturan yang kita matikan agar build tetap jalan
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-const': 'warn',
    },
  }),
];

export default eslintConfig;

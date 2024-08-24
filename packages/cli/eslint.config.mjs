import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import path from 'path';
import tsEslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = [
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['dist', 'eslint.config.mjs'],
  },
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 2022,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
  },
];

export default config;

import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintAlly from 'eslint-plugin-jsx-a11y';
import { globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist', 'build', 'coverage', 'node_modules']),
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.app.json',
				tsconfigRootDir: process.cwd(),
				sourceType: 'module',
			},
			globals: globals.browser,
		},
		plugins: {
			react,
			import: importPlugin,
			'unused-imports': unusedImports,
			'jsx-a11y': eslintAlly,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			tseslint.configs.recommendedTypeChecked,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
			react.configs.flat.recommended,
			prettierConfig,
			eslintPluginPrettierRecommended,
		],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'unused-imports/no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
				},
			],
			'import/no-unresolved': 'error',
			'react/jsx-no-useless-fragment': 'error',
			'react/self-closing-comp': 'warn',
			'react/jsx-pascal-case': 'warn',
			eqeqeq: ['error', 'always'],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'prefer-const': 'warn',
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-is-valid': 'warn',
			'react/react-in-jsx-scope': 'off',
		},
	},
]);

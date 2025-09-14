// eslint.config.ts
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
	globalIgnores(['dist', 'build', 'coverage', 'node_modules']),
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			parser: tseslint.parser,
			parserOptions: {
				project: true,
				tsconfigRootDir: process.cwd(),
				sourceType: 'module',
			},
			globals: globals.browser,
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: importPlugin,
			'unused-imports': unusedImports,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			tseslint.configs.recommendedTypeChecked,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
			prettier,
		],
		rules: {
			'unused-imports/no-unused-imports': 'warn',
			'unused-imports/no-unused-vars': [
				'warn',
				{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
			],
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
				},
			],
			'import/no-unresolved': 'error',
			'react/jsx-no-useless-fragment': 'warn',
			'react/self-closing-comp': 'warn',
			'react/jsx-pascal-case': 'warn',
			eqeqeq: ['error', 'always'],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'no-unused-vars': 'off',
			'prefer-const': 'warn',
			'no-multi-spaces': 'warn',
			'no-trailing-spaces': 'warn',
			'arrow-body-style': ['warn', 'as-needed'],
		},
	},
]);
